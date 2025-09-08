import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { withCORS, buildWhere, handlePrismaError } from "../_utils";
import {
  buildUserCreateData,
  mapOrder,
  parseCount,
  parseIntSafe,
  parseOrder,
  toDto,
} from "./helpers";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    try {
      const startIndex = parseIntSafe(req.query.startIndex, 0);
      const count = parseCount(req.query.count, 50);
      const filter = (req.query.filter as string | null) ?? null;

      const orderByRaw = (req.query.orderBy as string | null) ?? null;
      const orderBy = orderByRaw === "userId" ? "id" : orderByRaw;
      const order = parseOrder(req.query.order);

      const where = buildWhere(filter);
      const orderClause = mapOrder(orderBy, order);

      const [totalCount, rows] = await Promise.all([
        prisma.user.count({ where }),
        prisma.user.findMany({
          where: where, // <-- правильно, не "where, {"
          orderBy: orderClause,
          skip: startIndex,
          take: count,
          select: { id: true, email: true, name: true, balance: true },
        }),
      ]);

      return res.status(200).json({
        rows: rows.map(toDto),
        totalCount,
        startIndex,
        count,
      });
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  if (req.method === "POST") {
    try {
      const data = buildUserCreateData(req.body);
      if (!data.email)
        return res.status(400).json({ message: "Email is required" });
      if (!data.password)
        return res.status(400).json({ message: "Password is required" });

      const created = await prisma.user.create({
        data, // <-- теперь корректный тип
        select: { id: true },
      });

      return res.status(201).json(created.id);
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  res.setHeader("Allow", ["GET", "POST"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}

export default withCORS(handler);
