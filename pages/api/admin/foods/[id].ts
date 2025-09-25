// pages/api/admin/foods/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { withCORS } from "../../_utils";
import { parseMultipart } from "../../_utils/_upload";

import {
  // общие утилиты — вместо локальных дублей
  asInt,
  strOrNull,
  numOrNull,
  boolOrUndefined,
  toIdArray,
} from "../../_utils";

export const config = {
  api: { bodyParser: false, sizeLimit: "25mb" },
};

// --- вспомогательный хелпер для вытаскивания имени загруженного файла
function pickUploadedName(
  files: Record<string, Array<{ newFilename: string }>> | undefined,
  key: string
): string | undefined {
  const f = files?.[key]?.[0]?.newFilename;
  return f && String(f);
}

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = asInt(req.query.id);
  if (!id || id <= 0) return res.status(400).json({ message: "Invalid id" });

  if (req.method === "GET") {
    const row = await prisma.food.findUnique({
      where: { id },
      include: {
        taste: true,
        ingredient: true,
        hardness: true,
        designed: { include: { designedFor: true } },
        ages: { include: { age: true } },
        typeTreats: { include: { typeTreat: true } },
        petSizes: { include: { petSize: true } },
        foodPackage: { include: { package: true } },
        specialNeeds: { include: { specialNeeds: true } },
      },
    });
    if (!row) return res.status(404).json({ message: "Not found" });

    const dto = {
      ...row,
      designedForIds: row.designed.map((d) => d.designedForId),
      ageIds: row.ages.map((a) => a.ageId),
      typeTreatIds: row.typeTreats.map((t) => t.typeTreatId),
      petSizeIds: row.petSizes.map((p) => p.petSizeId),
      packageIds: row.foodPackage.map((p) => p.packageId),
      specialNeedsIds: row.specialNeeds.map((s) => s.specialNeedsId),
    };
    return res.status(200).json(dto);
  }

  if (req.method === "PUT" || req.method === "PATCH") {
    try {
      let fields: any = {};
      let files: Record<string, Array<{ newFilename: string }>> | undefined =
        undefined;

      const ctype = String(req.headers["content-type"] || "");
      if (ctype.startsWith("multipart/form-data")) {
        const parsed = await parseMultipart(req);
        fields = parsed.fields ?? {};
        files = parsed.files as any;
      } else {
        fields = req.body ?? {};
      }

      // базовые поля
      const dataToUpdate: any = {
        artikul: strOrNull(fields.artikul),
        title: strOrNull(fields.title),
        price: Number(numOrNull(fields.price) ?? 0),
        priceDiscount: Number(numOrNull(fields.priceDiscount) ?? 0),
        vat: boolOrUndefined(fields.vat),
        isPromo: boolOrUndefined(fields.isPromo),
        ozonId: strOrNull(fields.ozonId),
        imgUrl: strOrNull(fields.imgUrl),
        feature: strOrNull(fields.feature),
        weight: numOrNull(fields.weight),
        quantity: numOrNull(fields.quantity),
        quantityPackages: numOrNull(fields.quantityPackages),
        type: strOrNull(fields.type) as any, // enum: 'Treat' | 'Souvenirs' | 'DryFood'
        expiration: numOrNull(fields.expiration),
        annotation: strOrNull(fields.annotation),
        packageSize: strOrNull(fields.packageSize),
        tasteId: numOrNull(fields.tasteId),
        ingredientId: numOrNull(fields.ingredientId),
        hardnessId: (() => {
          const v = numOrNull(fields.hardnessId);
          return v && v > 0 ? v : null; // 0 → null
        })(),
        stock: Number(numOrNull(fields.stock) ?? 0),
      };

      // основное изображение: либо новое, либо оставить/очистить по строковому значению
      const imgUploaded = pickUploadedName(files, "imgFile");
      if (imgUploaded) dataToUpdate.img = imgUploaded;
      else if ("img" in fields) dataToUpdate.img = strOrNull(fields.img);

      // img1..img10 — аналогично
      for (let i = 1; i <= 10; i++) {
        const fileKey = `img${i}File`;
        const fieldKey = `img${i}`;
        const up = pickUploadedName(files, fileKey);
        if (up) dataToUpdate[fieldKey] = up;
        else if (fieldKey in (fields || {}))
          dataToUpdate[fieldKey] = strOrNull(fields[fieldKey]);
      }

      // M:N — массивы id (при multipart приходят как JSON-строки/CSV)
      const designedForIds = toIdArray(fields.designedForIds);
      const ageIds = toIdArray(fields.ageIds);
      const typeTreatIds = toIdArray(fields.typeTreatIds);
      const petSizeIds = toIdArray(fields.petSizeIds);
      const packageIds = toIdArray(fields.packageIds);
      const specialNeedsIds = toIdArray(fields.specialNeedsIds);

      await prisma.$transaction(async (tx) => {
        // 1→N
        await tx.food.update({ where: { id }, data: dataToUpdate });

        // M:N — пересобираем
        await tx.foodDesignedFor.deleteMany({ where: { foodId: id } });
        await tx.foodAge.deleteMany({ where: { foodId: id } });
        await tx.foodTypeTreat.deleteMany({ where: { foodId: id } });
        await tx.foodPetSize.deleteMany({ where: { foodId: id } });
        await tx.foodPackage.deleteMany({ where: { foodId: id } });
        await tx.foodSpecialNeeds.deleteMany({ where: { foodId: id } });

        if (designedForIds.length)
          await tx.foodDesignedFor.createMany({
            data: designedForIds.map((x) => ({ foodId: id, designedForId: x })),
          });
        if (ageIds.length)
          await tx.foodAge.createMany({
            data: ageIds.map((x) => ({ foodId: id, ageId: x })),
          });
        if (typeTreatIds.length)
          await tx.foodTypeTreat.createMany({
            data: typeTreatIds.map((x) => ({ foodId: id, typeTreatId: x })),
          });
        if (petSizeIds.length)
          await tx.foodPetSize.createMany({
            data: petSizeIds.map((x) => ({ foodId: id, petSizeId: x })),
          });
        if (packageIds.length)
          await tx.foodPackage.createMany({
            data: packageIds.map((x) => ({ foodId: id, packageId: x })),
          });
        if (specialNeedsIds.length)
          await tx.foodSpecialNeeds.createMany({
            data: specialNeedsIds.map((x) => ({
              foodId: id,
              specialNeedsId: x,
            })),
          });
      });

      return res.status(200).json({ id });
    } catch (err: any) {
      console.error("[/api/admin/foods/[id]] PUT/PATCH error:", err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
  }

  if (req.method === "DELETE") {
    await prisma.food.delete({ where: { id } });
    return res.status(200).json({ id });
  }

  res.setHeader("Allow", ["GET", "PUT", "PATCH", "DELETE", "OPTIONS"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}

export default withCORS(handler);
