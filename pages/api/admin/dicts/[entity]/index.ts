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
  handlePrismaError,
} from "../../../_utils";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const entity = String(req.query.entity || "");
  const model = getModel(prisma, entity);
  if (!model) return res.status(404).json({ message: "Unknown dictionary" });

  if (req.method === "GET") {
    try {
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
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  if (req.method === "POST") {
    const rawName = req.body?.name ?? null;
    const name = typeof rawName === "string" ? rawName.trim() : null;
    if (!name) {
      return res.status(400).json({ message: "Name is required" });
    }

    try {
      const created = await model.create({
        data: { name },
        select: { id: true, name: true },
      });

      return res.status(201).json(created);
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}

export default withCORS(handler);
