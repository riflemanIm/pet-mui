// import-data.js — Excel -> DB + изображения
import path from "path";
import fs from "fs/promises";
import axios from "axios";
import excelToJson from "convert-excel-to-json";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const SHEET_NAME = "Шаблон";
const EXCEL_FILE = path.resolve(process.cwd(), "import_data", "data.xlsx");
const IMG_DIR = path.resolve(process.cwd(), "public", "images", "catalog");
const CONCURRENCY = Number(process.env.DOWNLOAD_CONCURRENCY || 5);
const DOWNLOAD_IMAGES = String(process.env.DOWNLOAD_IMAGES || "true").toLowerCase() !== "false";

// ------------------- helpers -------------------
const textOrNull = (value) => {
  if (value === null || value === undefined) return null;
  const str = String(value).trim();
  return str.length ? str : null;
};

const parseNumber = (value) => {
  if (value === null || value === undefined || value === "") return null;
  if (typeof value === "number" && Number.isFinite(value)) return value;
  const cleaned = String(value).replace(/\s+/g, "").replace(",", ".");
  const num = Number(cleaned);
  return Number.isFinite(num) ? num : null;
};

const parseIntOrNull = (value) => {
  const num = parseNumber(value);
  if (num === null) return null;
  const intNum = Math.round(num);
  return Number.isFinite(intNum) ? intNum : null;
};

const parseBool = (value) => {
  const str = String(value ?? "").trim().toLowerCase();
  if (!str) return false;
  if (["да", "yes", "true", "1"].includes(str)) return true;
  if (["нет", "no", "false", "0"].includes(str)) return false;
  return false;
};

const parseVat = (value) => {
  const str = String(value ?? "").trim().toLowerCase();
  if (!str || str === "не облагается" || str === "нет") return false;
  const num = parseNumber(str.replace("%", ""));
  if (num === null) return false;
  return num > 0;
};

const splitUrls = (str) =>
  String(str || "")
    .split(/[\n;]+/g)
    .map((s) => s.trim())
    .filter(Boolean);

const splitNames = (value) => {
  if (value === null || value === undefined) return [];
  if (Array.isArray(value)) return value.flatMap((v) => splitNames(v));
  const str = String(value).trim();
  if (!str) return [];
  return str
    .split(/[;,\n]+/g)
    .map((part) => part.trim())
    .filter(Boolean);
};

const firstName = (value) => {
  const arr = splitNames(value);
  return arr.length ? arr[0] : null;
};

const normalizeFoodType = (value) => {
  const str = String(value ?? "").trim().toLowerCase();
  if (str === "лакомство") return "Treat";
  if (str === "корм сухой") return "DryFood";
  return "Treat";
};

const fileName = (url) => {
  if (!url) return null;
  const parts = String(url).split("/").filter(Boolean);
  if (!parts.length) return null;
  if (parts.length < 3) return parts[parts.length - 1] || null;
  return `${parts[parts.length - 3]}_${parts[parts.length - 2]}_${
    parts[parts.length - 1]
  }`;
};

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
    });
    await fs.writeFile(destPath, res.data);
    console.log("  ✓", path.basename(destPath));
  } catch (e) {
    console.warn("  ✗", path.basename(destPath), "-", e.message);
  }
}

async function runWithConcurrency(items, limit, worker) {
  let index = 0;
  const total = items.length;

  async function runner() {
    for (;;) {
      const current = index++;
      if (current >= total) return;
      await worker(items[current], current, total);
    }
  }

  const runners = Array.from({ length: Math.min(limit, total) }, () => runner());
  await Promise.all(runners);
}

// prisma helpers
async function getId(table, name) {
  const value = textOrNull(name);
  if (!value) return null;
  let rec = await prisma[table].findFirst({ where: { name: value } });
  if (!rec) {
    rec = await prisma[table].create({ data: { name: value } });
    console.log(`Создана запись в ${table}: "${value}" (id=${rec.id})`);
  }
  return rec.id;
}

async function bindMany(foodId, table, joinModel, field, rawValue) {
  const names = Array.from(new Set(splitNames(rawValue)));
  if (!names.length) return;

  for (const name of names) {
    const refId = await getId(table, name);
    if (!refId) continue;
    try {
      await prisma[joinModel].create({
        data: {
          foodId,
          [field]: refId,
        },
      });
    } catch (err) {
      if (!err || err.code !== "P2002") throw err;
    }
  }
}
// ------------------------------------------------

async function main() {
  console.log("→ Читаю Excel", EXCEL_FILE);
  const workbook = excelToJson({ sourceFile: EXCEL_FILE });
  const sheet = workbook[SHEET_NAME] || [];
  const rows = sheet.filter((r) => /^\d+$/.test(String(r.A || "")));

  if (!rows.length) {
    console.error(`Лист "${SHEET_NAME}" пуст или нет строк с ID.`);
    await prisma.$disconnect();
    process.exit(1);
  }

  const errors = [];
  const imgRecords = [];
  const toDownload = new Map();

  for (const row of rows) {
    try {
      const artikul = textOrNull(row.B);
      const title = textOrNull(row.C);
      const price = parseNumber(row.D) ?? 0;
      const priceDiscount = parseNumber(row.E) ?? 0;
      const vat = parseVat(row.F);
      const isPromo = parseBool(row.G);
      const ozonId = textOrNull(row.J);

      const mainImgUrl = textOrNull(row.O);
      const extraUrls = splitUrls(row.P);

      const feature = textOrNull(row.T);
      const weight = parseIntOrNull(row.U);
      const quantity = parseIntOrNull(row.V);
      const quantityPackages = parseIntOrNull(row.W);

      const type = normalizeFoodType(row.X);
      const expiration = parseIntOrNull(row.Z);
      const annotation = textOrNull(row.AC);
      const packageSize = textOrNull(row.AG);

      const tasteId = await getId("taste", firstName(row.AM));
      const ingredientId = await getId("ingredient", firstName(row.AR));
      const hardnessId = await getId("hardness", firstName(row.AN));

      const mainName = fileName(mainImgUrl);

      const extrasMap = new Map();
      for (const url of extraUrls) {
        const name = fileName(url);
        if (!name) continue;
        if (name === mainName) continue;
        if (!extrasMap.has(name)) extrasMap.set(name, { name, url });
      }
      const extraEntries = Array.from(extrasMap.values());
      const top10 = extraEntries.slice(0, 10);

      const imgFields = {};
      for (let i = 0; i < 10; i++) {
        imgFields[`img${i + 1}`] = top10[i]?.name ?? null;
      }

      const food = await prisma.food.create({
        data: {
          artikul,
          title,
          price,
          priceDiscount,
          vat,
          isPromo,
          ozonId,
          img: mainName ?? null,
          imgUrl: mainImgUrl ?? null,
          imgs: textOrNull(row.P),
          ...imgFields,
          feature,
          weight,
          quantity,
          quantityPackages,
          type,
          expiration,
          annotation,
          packageSize,
          tasteId,
          ingredientId,
          hardnessId,
        },
      });

      await bindMany(food.id, "designedFor", "foodDesignedFor", "designedForId", row.Y);
      await bindMany(food.id, "age", "foodAge", "ageId", row.AA);
      await bindMany(food.id, "typeTreat", "foodTypeTreat", "typeTreatId", row.AL);
      await bindMany(food.id, "package", "foodPackage", "packageId", row.AH);
      await bindMany(food.id, "petSize", "foodPetSize", "petSizeId", row.AT);
      await bindMany(food.id, "specialNeeds", "foodSpecialNeeds", "specialNeedsId", row.AU);

      if (extraEntries.length) {
        for (const entry of extraEntries) {
          imgRecords.push({ foodId: food.id, img: entry.name });
        }
      }

      if (mainName && mainImgUrl && !toDownload.has(mainName)) {
        toDownload.set(mainName, mainImgUrl);
      }
      for (const entry of extraEntries) {
        if (!toDownload.has(entry.name) && entry.url) {
          toDownload.set(entry.name, entry.url);
        }
      }
    } catch (error) {
      console.error("Ошибка при обработке строки", row.A, error.message);
      errors.push({
        row: row.A,
        error: {
          name: error.name,
          code: error.code,
          meta: error.meta,
          message: error.message,
        },
      });
    }
  }

  if (imgRecords.length) {
    try {
      await prisma.foodImgAdd.createMany({ data: imgRecords, skipDuplicates: true });
      console.log(`Создано записей в foodImgAdd (с учётом дублей): ${imgRecords.length}`);
    } catch (e) {
      console.error("Ошибка при createMany foodImgAdd:", e.message);
    }
  }

  await fs.writeFile(
    "import-errors.json",
    JSON.stringify(errors, null, 2),
    "utf8"
  );
  console.log(
    `Импорт завершён. Обработано: ${rows.length}. Успешно: ${rows.length - errors.length}. Ошибки: ${errors.length}.`
  );

  if (DOWNLOAD_IMAGES && toDownload.size) {
    await ensureDir(IMG_DIR);
    const entries = Array.from(toDownload.entries());
    console.log(`→ Скачивание ${entries.length} файлов (потоков: ${CONCURRENCY})`);
    await runWithConcurrency(entries, CONCURRENCY, async ([name, url], idx, total) => {
      const dest = path.join(IMG_DIR, name);
      if (await fileExists(dest)) {
        console.log(`[${idx + 1}/${total}] уже есть: ${name}`);
        return;
      }
      console.log(`[${idx + 1}/${total}] ${name}`);
      await downloadFile(dest, url);
    });
  } else if (DOWNLOAD_IMAGES) {
    console.log("Нет изображений для скачивания.");
  } else {
    console.log("Скачивание изображений отключено (DOWNLOAD_IMAGES=false).");
  }

  await prisma.$disconnect();
}

main().catch(async (e) => {
  console.error(e);
  await prisma.$disconnect();
  process.exit(1);
});
