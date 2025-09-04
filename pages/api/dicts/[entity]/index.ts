import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../lib/prisma";
import {
  withCORS,
  asInt,
  asCount,
  asOrder,
  buildWhere,
  asListPayload,
  getModel,
  normalizeOrderBy,
} from "../_utils";

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
    const name = req.body?.name ?? null;
    if (name == null || String(name).trim() === "") {
      return res.status(400).json({ message: "Name is required" });
    }
    const created = await model.create({
      data: { name: String(name) },
      select: { id: true },
    });
    // doGenericCreate ждёт число (id)
    return res.status(201).json(created.id);
  }

  res.setHeader("Allow", ["GET", "POST", "OPTIONS"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}

export default withCORS(handler);
