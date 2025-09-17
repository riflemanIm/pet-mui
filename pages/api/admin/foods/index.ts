import type { NextApiRequest, NextApiResponse } from "next";
import type { Prisma } from "@prisma/client";
import prisma from "../../../../lib/prisma";
import {
  withCORS,
  asInt,
  asCount,
  asOrder,
  buildWhereByFields,
  normalizeOrderBy,
} from "../../_utils";

const ORDER_FIELDS = [
  "id",
  "title",
  "artikul",
  "price",
  "priceDiscount",
  "stock",
  "isPromo",
  "type",
  "publishedAt",
  "createdAt",
] as const;

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    const startIndex = asInt(req.query.startIndex, 0);
    const count = asCount(req.query.count, 50);
    const order = asOrder(req.query.order);
    const orderBy = normalizeOrderBy(
      (req.query.orderBy as string) || null,
      ORDER_FIELDS as unknown as readonly string[],
      "id"
    );
    const filter = (req.query.filter as string | null) ?? null;

    // ВАЖНО: для Food строим where по строковым полям Food
    const where = buildWhereByFields<Prisma.FoodWhereInput>(filter, [
      "title",
      "artikul",
      "annotation",
      "feature",
    ]);

    const [totalCount, rowsDb] = await Promise.all([
      prisma.food.count({ where }),
      prisma.food.findMany({
        where,
        orderBy: { [orderBy]: order },
        skip: startIndex,
        take: count,
        select: {
          id: true,
          artikul: true,
          img: true,

          title: true,
          price: true,
          priceDiscount: true,
          type: true,
          stock: true,
          isPromo: true,
          createdAt: true,
          publishedAt: true,
          // 1→N
          tasteId: true,
          ingredientId: true,
          hardnessId: true,
          // M:N — берём только id связей
          designed: { select: { designedForId: true } },
          ages: { select: { ageId: true } },
          typeTreats: { select: { typeTreatId: true } },
          petSizes: { select: { petSizeId: true } },
          foodPackage: { select: { packageId: true } },
          specialNeeds: { select: { specialNeedsId: true } },
        },
      }),
    ]);

    // нормализуем в *_Ids
    const rows = rowsDb.map((r) => ({
      ...r,
      designedForIds: r.designed?.map((x) => x.designedForId) ?? [],
      ageIds: r.ages?.map((x) => x.ageId) ?? [],
      typeTreatIds: r.typeTreats?.map((x) => x.typeTreatId) ?? [],
      petSizeIds: r.petSizes?.map((x) => x.petSizeId) ?? [],
      packageIds: r.foodPackage?.map((x) => x.packageId) ?? [],
      specialNeedsIds: r.specialNeeds?.map((x) => x.specialNeedsId) ?? [],
    }));
    return res.status(200).json({ rows, totalCount, startIndex, count });
  }

  if (req.method === "POST") {
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

    const created = await prisma.food.create({
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
        type, // enum FoodType
        expiration: expiration ? Number(expiration) : null,
        annotation: annotation ?? null,
        packageSize: packageSize ?? null,
        tasteId: tasteId ? Number(tasteId) : null,
        ingredientId: ingredientId ? Number(ingredientId) : null,
        hardnessId: hardnessId ? Number(hardnessId) : null,
        stock: stock ? Number(stock) : 0,

        // M:N связи
        designed: designedForIds?.length
          ? {
              create: designedForIds.map((id: number) => ({
                designedFor: { connect: { id } },
              })),
            }
          : undefined,
        ages: ageIds?.length
          ? {
              create: ageIds.map((id: number) => ({
                age: { connect: { id } },
              })),
            }
          : undefined,
        typeTreats: typeTreatIds?.length
          ? {
              create: typeTreatIds.map((id: number) => ({
                typeTreat: { connect: { id } },
              })),
            }
          : undefined,
        petSizes: petSizeIds?.length
          ? {
              create: petSizeIds.map((id: number) => ({
                petSize: { connect: { id } },
              })),
            }
          : undefined,
        foodPackage: packageIds?.length
          ? {
              create: packageIds.map((id: number) => ({
                package: { connect: { id } },
              })),
            }
          : undefined,
        specialNeeds: specialNeedsIds?.length
          ? {
              create: specialNeedsIds.map((id: number) => ({
                specialNeeds: { connect: { id } },
              })),
            }
          : undefined,

        // Доп. изображения
        imgsAdd: imgsAdd?.length
          ? { createMany: { data: imgsAdd.map((img: string) => ({ img })) } }
          : undefined,
      },
      select: { id: true },
    });

    return res.status(201).json(created.id);
  }

  res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}

export default withCORS(handler);
