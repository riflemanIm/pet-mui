// import-data.js
import { writeFileSync } from "fs";
import excelToJson from "convert-excel-to-json";
import path from "path";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

// Параметры
const SHEET_NAME = "Шаблон";
const EXCEL_FILE = path.resolve(process.cwd(), "import_data", "data.xlsx");

/**
 * Найти или создать запись в справочной таблице с полем `name`.
 */
async function getId(table, name) {
  if (!name) return null;
  const value = String(name).trim();
  let rec = await prisma[table].findFirst({ where: { name: value } });
  if (!rec) {
    rec = await prisma[table].create({ data: { name: value } });
    console.log(`Создана запись в ${table}: "${value}" (id=${rec.id})`);
  }
  return rec.id;
}

/**
 * Создать M2M-связи через joinModel
 */
async function bindMany(foodId, table, joinModel, field, valueStr) {
  if (!valueStr) return;
  const names = String(valueStr)
    .split(";")
    .map((s) => s.trim())
    .filter(Boolean);

  for (const name of names) {
    // если нет — создаём справочник
    const refId = await getId(table, name);
    await prisma[joinModel]
      .create({
        data: {
          foodId,
          [field]: refId,
        },
      })
      .catch((e) => {
        // на случай дублирования
        if (e.code !== "P2002") console.error(e);
      });
  }
}

async function main() {
  // 1) Чтение и конвертация Excel в JSON
  const result = excelToJson({ sourceFile: EXCEL_FILE });
  const rows = result[SHEET_NAME] || [];
  if (!rows.length) {
    console.error(`Лист "${SHEET_NAME}" пуст или не найден.`);
    process.exit(1);
  }

  // 2) Фильтрация: только числовые ID в колонке A
  const dataRows = rows.filter((r) => /^\d+$/.test(String(r.A)));
  const errors = [];

  for (const it of dataRows) {
    try {
      // Парсинг полей из строк Excel
      const artikul = String(it.B || "").trim();
      const title = String(it.C || "").trim();
      const price = it.D != null ? parseFloat(it.D) : 0.0;
      const priceDiscount = it.E != null ? parseFloat(it.E) : 0.0;
      const vat = String(it.F || "").trim() === "Да";
      const isPromo = String(it.G || "").trim() === "Да";
      const ozonId = it.J ? String(it.J).trim() : null;

      const imgUrl = it.O ? String(it.O).trim() : null;
      const imgs = it.P ? String(it.P).trim() : null;

      const feature = it.T ? String(it.T).trim() : null;
      const weight = parseInt(it.U || 0, 10);

      const quantity = it.V != null ? parseInt(it.V, 10) : null;
      const quantityPackages = it.W != null ? parseInt(it.W, 10) : null;

      const typeId = it.X ? String(it.X).trim() : null;
      const foodType = typeId === "Лакомство" ? "Treat" : "DryFood";

      const expiration = it.Z != null ? parseInt(it.Z, 10) : null;
      const annotation = it.AC ? String(it.AC).trim() : null;
      const packageSize = it.AG ? String(it.AG).trim() : null;

      const tasteId = await getId("taste", it.AM);
      const ingredientId = await getId("ingredient", it.AR);
      const hardnessId = await getId("hardness", it.AN);

      const food = await prisma.food.create({
        data: {
          artikul,
          title,
          price,
          priceDiscount,
          vat,
          isPromo,
          ozonId,

          //img,
          imgUrl,
          imgs,

          feature,
          weight,
          quantity,
          quantityPackages,
          type: foodType,

          expiration,
          annotation,
          packageSize,

          taste: tasteId ? { connect: { id: tasteId } } : undefined,
          ingredient: ingredientId
            ? { connect: { id: ingredientId } }
            : undefined,
          hardness: hardnessId ? { connect: { id: hardnessId } } : undefined,
        },
      });

      // M2M
      await bindMany(
        food.id,
        "designedFor",
        "foodDesignedFor",
        "designedForId",
        it.Y
      );
      await bindMany(food.id, "age", "foodAge", "ageId", it.AA);

      await bindMany(
        food.id,
        "typeTreat",
        "foodTypeTreat",
        "typeTreatId",
        it.AL
      );
      await bindMany(food.id, "package", "foodPackage", "packageId", it.AH);
      await bindMany(food.id, "petSize", "foodPetSize", "petSizeId", it.AT);
      await bindMany(
        food.id,
        "specialNeeds",
        "foodSpecialNeeds",
        "specialNeedsId",
        it.AU
      );
    } catch (error) {
      errors.push({
        row: it.A,
        error: {
          name: error.name,
          code: error.code,
          meta: error.meta,
          message: error.message,
        },
      });
    }
  }

  // сохранить ошибки
  writeFileSync("import-errors.json", JSON.stringify(errors, null, 2));
  console.log(JSON.stringify(errors, null, 2));
  console.log("Done.");
  process.exit(0);
}

main();
