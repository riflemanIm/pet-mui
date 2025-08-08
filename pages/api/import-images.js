// import-images.js
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import fs from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

const IMG_DIR = path.resolve(process.cwd(), "public", "images", "catalog");

// --- helpers --------------------------------------------------
const fileName = (url) => {
  if (!url) return null;
  const parts = String(url).split("/");
  if (parts.length < 3) return parts[parts.length - 1] || null;
  return `${parts[parts.length - 3]}_${parts[parts.length - 2]}_${
    parts[parts.length - 1]
  }`;
};

const splitUrls = (str) =>
  String(str || "")
    .split(/[\n;]+/g)
    .map((s) => s.trim())
    .filter(Boolean);

async function ensureDir(dir) {
  await fs.mkdir(dir, { recursive: true });
}

async function downloadFile(destPath, url) {
  try {
    const res = await axios.get(url, {
      responseType: "arraybuffer",
      timeout: 30000,
    });
    await fs.writeFile(destPath, res.data);
    console.log("  ✓", path.basename(destPath));
  } catch (e) {
    console.warn("  ✗", path.basename(destPath), "-", e.message);
  }
}
// --------------------------------------------------------------

async function main() {
  console.log("→ Начинаю загрузку изображений…");
  await ensureDir(IMG_DIR);

  const foods = await prisma.food.findMany({
    select: { id: true, imgUrl: true, imgs: true },
  });
  console.log(`Найдены товары: ${foods.length}`);

  // Мапа уникальных картинок: imgFileName -> url
  const toDownload = new Map();
  // Записи для таблицы дополнительных фото
  const imgRecords = [];

  // 1) Обработка каждой записи food
  for (const f of foods) {
    const mainName = fileName(f.imgUrl);

    // Обновляем поле img у товара
    if (mainName) {
      await prisma.food.update({
        where: { id: f.id },
        data: { img: mainName },
      });
      if (!toDownload.has(mainName)) toDownload.set(mainName, f.imgUrl);
    }

    // Дополнительные изображения
    const urls = splitUrls(f.imgs);
    for (const url of urls) {
      const name = fileName(url);
      if (!name) continue;
      // исключаем дубли и главное изображение
      if (name === mainName) continue;

      imgRecords.push({ foodId: f.id, img: name });
      if (!toDownload.has(name)) toDownload.set(name, url);
    }
  }

  // 2) createMany для дополнительных картинок
  // (ожидается уникальный индекс, иначе skipDuplicates не поможет)
  if (imgRecords.length) {
    try {
      await prisma.foodImgAdd.createMany({
        data: imgRecords,
        skipDuplicates: true,
      });
      console.log(
        `Добавлены связи в foodImgAdd: ~${imgRecords.length} (с пропуском дублей)`
      );
    } catch (e) {
      console.error("Ошибка при createMany foodImgAdd:", e.message);
    }
  } else {
    console.log("Дополнительных картинок не обнаружено.");
  }

  // 3) Скачивание файлов (уникальные)
  console.log(`К скачиванию файлов: ${toDownload.size}`);
  let i = 0;
  for (const [name, url] of toDownload.entries()) {
    i++;
    const dest = path.join(IMG_DIR, name);
    process.stdout.write(`[${i}/${toDownload.size}] ${name}\n`);
    await downloadFile(dest, url);
  }

  console.log("Готово ✅");
  await prisma.$disconnect();
}

// Запуск как standalone
main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
