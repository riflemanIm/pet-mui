// import-images.js
import { PrismaClient } from "@prisma/client";
import axios from "axios";
import fs from "fs/promises";
import path from "path";

const prisma = new PrismaClient();

const IMG_DIR = path.resolve(process.cwd(), "public", "images", "catalog");
const CONCURRENCY = 5; // лимит параллельных скачиваний

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

async function fileExists(p) {
  try {
    await fs.access(p);
    return true;
  } catch {
    return false;
  }
}

async function downloadFile(destPath, url) {
  try {
    const res = await axios.get(url, {
      responseType: "arraybuffer",
      timeout: 30000,
      // Можно добавить maxContentLength / maxBodyLength при необходимости
    });
    await fs.writeFile(destPath, res.data);
    console.log("  ✓", path.basename(destPath));
  } catch (e) {
    console.warn("  ✗", path.basename(destPath), "-", e.message);
  }
}

/** Пул параллельных задач с лимитом */
async function runWithConcurrency(items, limit, worker) {
  let index = 0;
  const results = [];
  const total = items.length;

  async function runNext() {
    const current = index++;
    if (current >= total) return;

    const item = items[current];
    try {
      const r = await worker(item, current, total);
      results[current] = r;
    } catch (e) {
      results[current] = undefined;
      // worker сам логирует ошибку; здесь молчим
    }
    await runNext();
  }

  const runners = Array.from({ length: Math.min(limit, total) }, () =>
    runNext()
  );
  await Promise.all(runners);
  return results;
}
// --------------------------------------------------------------

async function main() {
  console.log("→ Начинаю загрузку изображений…");
  await ensureDir(IMG_DIR);

  const foods = await prisma.food.findMany({
    select: { id: true, imgUrl: true, imgs: true },
  });
  console.log(`Найдены товары: ${foods.length}`);

  // Ключ: имя файла, Значение: исходный URL
  const toDownload = new Map();

  for (const f of foods) {
    const mainName = fileName(f.imgUrl);

    // Доп. изображения из поля imgs
    const urls = splitUrls(f.imgs);
    const extraNamesAll = urls.map((u) => fileName(u)).filter(Boolean);

    // Уникальные доп. имена и без главного
    const extraUnique = Array.from(new Set(extraNamesAll)).filter(
      (name) => name !== mainName
    );

    // Берём первые 10
    const top10 = extraUnique.slice(0, 10);

    // Готовим объект апдейта с img1..img10
    const imgFields = {};
    for (let i = 0; i < 10; i++) {
      imgFields[`img${i + 1}`] = top10[i] ?? null; // null если меньше 10
    }

    // Обновляем запись food: главное фото + img1..img10
    await prisma.food.update({
      where: { id: f.id },
      data: {
        ...(mainName ? { img: mainName } : {}),
        ...imgFields,
      },
    });

    // К скачиванию: главное фото (если есть)
    if (mainName && f.imgUrl && !toDownload.has(mainName)) {
      toDownload.set(mainName, f.imgUrl);
    }

    // К скачиванию: доп. фото (только те, что попали в топ10)
    for (const url of urls) {
      const name = fileName(url);
      if (!name) continue;
      if (name === mainName) continue;
      if (!top10.includes(name)) continue; // игнорируем >10
      if (!toDownload.has(name)) toDownload.set(name, url);
    }
  }

  // Скачивание файлов (уникальные) с проверкой наличия и лимитом параллельности
  const entries = Array.from(toDownload.entries()); // [ [name, url], ... ]
  console.log(`К скачиванию файлов: ${entries.length} (лимит: ${CONCURRENCY})`);

  await runWithConcurrency(
    entries,
    CONCURRENCY,
    async ([name, url], idx, total) => {
      const dest = path.join(IMG_DIR, name);
      const exists = await fileExists(dest);
      if (exists) {
        console.log(`[${idx + 1}/${total}] • уже есть: ${name}`);
        return;
      }
      process.stdout.write(`[${idx + 1}/${total}] ${name}\n`);
      await downloadFile(dest, url);
    }
  );

  console.log("Готово ✅");
  await prisma.$disconnect();
}

// Запуск как standalone
main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
