import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import { withCORS } from "../_utils/withCORS";

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
    const {
      artikul,
      title,
      price,
      priceDiscount,
      vat,
      isPromo,
      ozonId,
      img,
      imgUrl,
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
      stock,
      designedForIds,
      ageIds,
      typeTreatIds,
      petSizeIds,
      packageIds,
      specialNeedsIds,
      imgsAdd,
    } = req.body || {};

    // Сначала обновим базовые поля
    const updated = await prisma.food.update({
      where: { id },
      data: {
        artikul,
        title,
        price: Number(price) || 0,
        priceDiscount: Number(priceDiscount) || 0,
        vat: !!vat,
        isPromo: !!isPromo,
        ozonId: ozonId ?? null,
        img: img ?? null,
        imgUrl: imgUrl ?? null,
        feature: feature ?? null,
        weight: weight ? Number(weight) : null,
        quantity: quantity ? Number(quantity) : null,
        quantityPackages: quantityPackages ? Number(quantityPackages) : null,
        type,
        expiration: expiration ? Number(expiration) : null,
        annotation: annotation ?? null,
        packageSize: packageSize ?? null,
        tasteId: tasteId ? Number(tasteId) : null,
        ingredientId: ingredientId ? Number(ingredientId) : null,
        hardnessId: hardnessId ? Number(hardnessId) : null,
        stock: stock ? Number(stock) : 0,
      },
      select: { id: true },
    });

    // Обновим M:N — проще «пересобрать»: удалить все записи связей и создать заново
    // Можно оптимизировать по-разному; для админки это ок.
    await prisma.$transaction([
      prisma.foodDesignedFor.deleteMany({ where: { foodId: id } }),
      prisma.foodAge.deleteMany({ where: { foodId: id } }),
      prisma.foodTypeTreat.deleteMany({ where: { foodId: id } }),
      prisma.foodPetSize.deleteMany({ where: { foodId: id } }),
      prisma.foodPackage.deleteMany({ where: { foodId: id } }),
      prisma.foodSpecialNeeds.deleteMany({ where: { foodId: id } }),
      prisma.foodImgAdd.deleteMany({ where: { foodId: id } }),

      ...(designedForIds?.length
        ? [
            prisma.foodDesignedFor.createMany({
              data: designedForIds.map((d: number) => ({
                foodId: id,
                designedForId: d,
              })),
            }),
          ]
        : []),
      ...(ageIds?.length
        ? [
            prisma.foodAge.createMany({
              data: ageIds.map((a: number) => ({ foodId: id, ageId: a })),
            }),
          ]
        : []),
      ...(typeTreatIds?.length
        ? [
            prisma.foodTypeTreat.createMany({
              data: typeTreatIds.map((t: number) => ({
                foodId: id,
                typeTreatId: t,
              })),
            }),
          ]
        : []),
      ...(petSizeIds?.length
        ? [
            prisma.foodPetSize.createMany({
              data: petSizeIds.map((p: number) => ({
                foodId: id,
                petSizeId: p,
              })),
            }),
          ]
        : []),
      ...(packageIds?.length
        ? [
            prisma.foodPackage.createMany({
              data: packageIds.map((p: number) => ({
                foodId: id,
                packageId: p,
              })),
            }),
          ]
        : []),
      ...(specialNeedsIds?.length
        ? [
            prisma.foodSpecialNeeds.createMany({
              data: specialNeedsIds.map((s: number) => ({
                foodId: id,
                specialNeedsId: s,
              })),
            }),
          ]
        : []),
      ...(imgsAdd?.length
        ? [
            prisma.foodImgAdd.createMany({
              data: imgsAdd.map((img: string) => ({ foodId: id, img })),
            }),
          ]
        : []),
    ]);

    return res.status(200).json(updated);
  }

  if (req.method === "DELETE") {
    await prisma.food.delete({ where: { id } });
    return res.status(200).json({ id });
  }

  res.setHeader("Allow", ["GET", "PUT", "PATCH", "DELETE", "OPTIONS"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}

export default withCORS(handler);
