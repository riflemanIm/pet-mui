// pages/api/admin/foods/index.ts
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
  try {
    if (req.method !== "GET") {
      res.setHeader("Allow", ["GET", "OPTIONS"]);
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    const startIndex = asInt(req.query.startIndex, 0);
    const count = asCount(req.query.count, 50);
    const order = asOrder(req.query.order);
    const orderBy = normalizeOrderBy(
      req.query.orderBy,
      ORDER_FIELDS as unknown as readonly string[],
      "id"
    );
    const filter = (req.query.filter as string | null) ?? null;

    // where по строковым полям Food
    const where: Prisma.FoodWhereInput | undefined =
      buildWhereByFields<Prisma.FoodWhereInput>(filter, [
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

          img1: true,
          img2: true,
          img3: true,
          img4: true,
          img5: true,
          img6: true,
          img7: true,
          img8: true,
          img9: true,
          img10: true,
          // 1→N
          tasteId: true,
          ingredientId: true,
          hardnessId: true,
          // M:N — только ID связей
          designed: { select: { designedForId: true } },
          ages: { select: { ageId: true } },
          typeTreat: { select: { typeTreatId: true } },
          petSizes: { select: { petSizeId: true } },
          foodPackage: { select: { packageId: true } },
          specialNeeds: { select: { specialNeedsId: true } },
        },
      }),
    ]);

    const rows = rowsDb.map((r) => {
      const { typeTreat, ...rest } = r;
      const relations = typeTreat ?? [];

      return {
        ...rest,
        typeTreat: relations,
        designedForIds: rest.designed?.map((x) => x.designedForId) ?? [],
        ageIds: rest.ages?.map((x) => x.ageId) ?? [],
        typeTreatIds: relations.map((x) => x.typeTreatId),
        petSizeIds: rest.petSizes?.map((x) => x.petSizeId) ?? [],
        packageIds: rest.foodPackage?.map((x) => x.packageId) ?? [],
        specialNeedsIds: rest.specialNeeds?.map((x) => x.specialNeedsId) ?? [],
      };
    });

    return res.status(200).json({ rows, totalCount, startIndex, count });
  } catch (err: any) {
    // Лог в консоль, чтобы видеть первопричину 500
    console.error("[/api/admin/foods] GET error:", err?.message, err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default withCORS(handler);
