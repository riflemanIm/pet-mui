import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../lib/prisma";
import {
  withCORS,
  asInt,
  asCount,
  asOrder,
  buildWhere,
  asListPayload,
  getModel,
  normalizeOrderBy,
} from "../../../_utils";
import { parseMultipart } from "../../../_utils/_upload";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const entity = String(req.query.entity || "");
  const model = getModel(prisma, entity);
  if (!model) return res.status(404).json({ message: "Unknown dictionary" });

  if (req.method === "GET") {
    const startIndex = asInt(req.query.startIndex, 0);
    const count = asCount(req.query.count, 50);
    const order = asOrder(req.query.order);
    const orderBy = normalizeOrderBy((req.query.orderBy as string) || null);
    const filter = (req.query.filter as string | null) ?? null;

    const where = buildWhere(filter);

    const [totalCount, rows] = await Promise.all([
      model.count({ where }),
      model.findMany({
        where,
        orderBy: { [orderBy]: order },
        skip: startIndex,
        take: count,
        select: { id: true, name: true },
      }),
    ]);

    return res
      .status(200)
      .json(asListPayload(rows, totalCount, startIndex, count));
  }

  if (req.method === "POST") {
    // form-data
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
      } = fields as any;

      const imgFile = files.imgFile;
      const img = imgFile
        ? imgFile.newFilename /* имя файла в uploads */
        : fields.img ?? null;

      const created = await prisma.food.create({
        data: {
          artikul: artikul ?? null,
          title: title ?? null,
          type,
          price: Number(price) || 0,
          priceDiscount: Number(priceDiscount) || 0,
          stock: Number(stock) || 0,
          tasteId: tasteId ? Number(tasteId) : null,
          ingredientId: ingredientId ? Number(ingredientId) : null,
          hardnessId: hardnessId ? Number(hardnessId) : null,
          img: img ?? null,

          designed: designedForIds?.length
            ? {
                createMany: {
                  data: designedForIds.map((id: number) => ({
                    designedForId: Number(id),
                  })),
                },
              }
            : undefined,
          ages: ageIds?.length
            ? {
                createMany: {
                  data: ageIds.map((id: number) => ({ ageId: Number(id) })),
                },
              }
            : undefined,
          typeTreats: typeTreatIds?.length
            ? {
                createMany: {
                  data: typeTreatIds.map((id: number) => ({
                    typeTreatId: Number(id),
                  })),
                },
              }
            : undefined,
          petSizes: petSizeIds?.length
            ? {
                createMany: {
                  data: petSizeIds.map((id: number) => ({
                    petSizeId: Number(id),
                  })),
                },
              }
            : undefined,
          foodPackage: packageIds?.length
            ? {
                createMany: {
                  data: packageIds.map((id: number) => ({
                    packageId: Number(id),
                  })),
                },
              }
            : undefined,
          specialNeeds: specialNeedsIds?.length
            ? {
                createMany: {
                  data: specialNeedsIds.map((id: number) => ({
                    specialNeedsId: Number(id),
                  })),
                },
              }
            : undefined,
        },
        select: { id: true },
      });

      return res.status(201).json(created.id);
    }

    // JSON (старый путь) — оставляем как есть, если используется
    // ... твоя текущая реализация POST (create) ...
    return res.status(400).json({ message: "Use multipart/form-data" });
  }

  res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}

export default withCORS(handler);
