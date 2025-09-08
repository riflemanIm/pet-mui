import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { withCORS } from "../../_utils";
import { parseMultipart } from "../../_utils/_upload";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = Number(req.query.id);
  if (!Number.isFinite(id) || id <= 0)
    return res.status(400).json({ message: "Invalid id" });

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
        imgsAdd: true,
      },
    });
    if (!row) return res.status(404).json({ message: "Not found" });

    // преобразуем связи в *_Ids для формы
    const dto = {
      ...row,
      designedForIds: row.designed.map((d) => d.designedForId),
      ageIds: row.ages.map((a) => a.ageId),
      typeTreatIds: row.typeTreats.map((t) => t.typeTreatId),
      petSizeIds: row.petSizes.map((p) => p.petSizeId),
      packageIds: row.foodPackage.map((p) => p.packageId),
      specialNeedsIds: row.specialNeeds.map((s) => s.specialNeedsId),
      imgsAdd: row.imgsAdd.map((i) => i.img),
    };
    return res.status(200).json(dto);
  }

  if (req.method === "PUT" || req.method === "PATCH") {
    const isMultipart = (req.headers["content-type"] || "").includes(
      "multipart/form-data"
    );

    if (isMultipart) {
      const { fields, files } = await parseMultipart(req);
      const {
        artikul,
        title,
        type,
        price,
        priceDiscount,
        stock,
        tasteId,
        ingredientId,
        hardnessId,
        designedForIds = [],
        ageIds = [],
        typeTreatIds = [],
        petSizeIds = [],
        packageIds = [],
        specialNeedsIds = [],
        img, // возможно пришло null/пусто если "Удалить"
      } = fields as any;

      const imgFile = files.imgFile;
      const newImg = imgFile ? imgFile.newFilename : img ?? undefined; // undefined — не менять, null — обнулить

      await prisma.$transaction(async (tx) => {
        await tx.food.update({
          where: { id },
          data: {
            artikul: artikul ?? null,
            title: title ?? null,
            type,
            price: price != null ? Number(price) : undefined,
            priceDiscount:
              priceDiscount != null ? Number(priceDiscount) : undefined,
            stock: stock != null ? Number(stock) : undefined,
            tasteId:
              tasteId !== undefined
                ? tasteId
                  ? Number(tasteId)
                  : null
                : undefined,
            ingredientId:
              ingredientId !== undefined
                ? ingredientId
                  ? Number(ingredientId)
                  : null
                : undefined,
            hardnessId:
              hardnessId !== undefined
                ? hardnessId
                  ? Number(hardnessId)
                  : null
                : undefined,
            ...(newImg === undefined ? {} : { img: newImg || null }),
          },
        });

        // зачистка и вставка M:N (как было у тебя)
        await tx.foodDesignedFor.deleteMany({ where: { foodId: id } });
        await tx.foodAge.deleteMany({ where: { foodId: id } });
        await tx.foodTypeTreat.deleteMany({ where: { foodId: id } });
        await tx.foodPetSize.deleteMany({ where: { foodId: id } });
        await tx.foodPackage.deleteMany({ where: { foodId: id } });
        await tx.foodSpecialNeeds.deleteMany({ where: { foodId: id } });

        if (designedForIds?.length)
          await tx.foodDesignedFor.createMany({
            data: designedForIds.map((x: number) => ({
              foodId: id,
              designedForId: Number(x),
            })),
          });
        if (ageIds?.length)
          await tx.foodAge.createMany({
            data: ageIds.map((x: number) => ({ foodId: id, ageId: Number(x) })),
          });
        if (typeTreatIds?.length)
          await tx.foodTypeTreat.createMany({
            data: typeTreatIds.map((x: number) => ({
              foodId: id,
              typeTreatId: Number(x),
            })),
          });
        if (petSizeIds?.length)
          await tx.foodPetSize.createMany({
            data: petSizeIds.map((x: number) => ({
              foodId: id,
              petSizeId: Number(x),
            })),
          });
        if (packageIds?.length)
          await tx.foodPackage.createMany({
            data: packageIds.map((x: number) => ({
              foodId: id,
              packageId: Number(x),
            })),
          });
        if (specialNeedsIds?.length)
          await tx.foodSpecialNeeds.createMany({
            data: specialNeedsIds.map((x: number) => ({
              foodId: id,
              specialNeedsId: Number(x),
            })),
          });
      });

      return res.status(200).json({ id });
    }

    // JSON-путь (оставь при необходимости)
    return res.status(400).json({ message: "Use multipart/form-data" });
  }

  if (req.method === "DELETE") {
    await prisma.food.delete({ where: { id } });
    return res.status(200).json({ id });
  }

  res.setHeader("Allow", ["GET", "PUT", "PATCH", "DELETE", "OPTIONS"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}

export default withCORS(handler);
