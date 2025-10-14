import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { handlePrismaError, withCORS } from "../_utils";

import { buildUserUpdateData, parseId, toDto } from "./helpers";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const id = parseId(req.query.id);
  if (!id) return res.status(400).json({ message: "Invalid id" });

  if (req.method === "GET") {
    try {
      const row = await prisma.user.findUnique({
        where: { id },
        select: { id: true, email: true, name: true, balance: true, role: true },
      });
      if (!row) return res.status(404).json({ message: "User not found" });
      return res.status(200).json(toDto(row));
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  if (req.method === "PUT" || req.method === "PATCH") {
    try {
      const data = buildUserUpdateData(req.body);
      if (!Object.keys(data).length) {
        return res.status(400).json({ message: "Nothing to update" });
      }

      const updated = await prisma.user.update({
        where: { id },
        data, // <-- корректный тип для update
        select: { id: true, email: true, name: true, balance: true, role: true },
      });

      return res.status(200).json(toDto(updated));
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  if (req.method === "DELETE") {
    try {
      await prisma.user.delete({ where: { id } });
      // тело не используется в doGenericDelete; можно вернуть { id }
      return res.status(200).json({ id });
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  res.setHeader("Allow", ["GET", "PUT", "PATCH", "DELETE"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}

export default withCORS(handler);
