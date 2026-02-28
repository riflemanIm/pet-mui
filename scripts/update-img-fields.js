// scripts/update-img-fields.js
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// === helpers ===
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

// === main ===
async function main() {
  console.log("→ Обновляю img1..img10 из поля imgs (без скачивания)…");

  const BATCH = 200; // размер страницы выборки
  let skip = 0;
  let processed = 0;

  for (;;) {
    const foods = await prisma.food.findMany({
      skip,
      take: BATCH,
      select: { id: true, imgs: true, imgUrl: true }, // imgUrl не обязателен, но полезен для исключения дубля
      orderBy: { id: "asc" },
    });
    if (!foods.length) break;

    for (const f of foods) {
      const mainName = fileName(f.imgUrl);
      const urls = splitUrls(f.imgs);
      const extraNamesAll = urls.map((u) => fileName(u)).filter(Boolean);

      // Уникальные + исключить главное, возьмём первые 10
      const extraUnique = Array.from(new Set(extraNamesAll)).filter(
        (name) => name !== mainName
      );
      const top10 = extraUnique.slice(0, 10);

      const data = {};
      for (let i = 0; i < 10; i++) {
        data[`img${i + 1}`] = top10[i] ?? null;
      }

      // Обновляем только img1..img10 (главное фото не трогаем)
      await prisma.food.update({
        where: { id: f.id },
        data,
      });

      processed++;
      if (processed % 100 === 0) {
        console.log(`  ✓ обновлено записей: ${processed}`);
      }
    }

    skip += foods.length;
  }

  console.log(`Готово ✅ Обновлено записей: ${processed}`);
  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
