import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../../../lib/prisma";
import { getModel, withCORS } from "../../../_utils";
async function handler(req: NextApiRequest, res: NextApiResponse) {
  const entity = String(req.query.entity || "");
  const model = getModel(prisma, entity);
  if (!model) return res.status(404).json({ message: "Unknown dictionary" });

  const id = Number(req.query.id);
  if (!Number.isFinite(id) || id <= 0) {
    return res.status(400).json({ message: "Invalid id" });
  }

  if (req.method === "GET") {
    const row = await model.findUnique({
      where: { id },
      select: { id: true, name: true },
    });
    if (!row) return res.status(404).json({ message: "Not found" });
    return res.status(200).json(row);
  }

  if (req.method === "PUT" || req.method === "PATCH") {
    const name = req.body?.name ?? null;
    if (name == null || String(name).trim() === "") {
      return res.status(400).json({ message: "Name is required" });
    }
    const row = await model.update({
      where: { id },
      data: { name: String(name) },
      select: { id: true, name: true },
    });
    return res.status(200).json(row);
  }

  if (req.method === "DELETE") {
    await model.delete({ where: { id } });
    return res.status(200).json({ id });
  }

  res.setHeader("Allow", ["GET", "PUT", "PATCH", "DELETE", "OPTIONS"]);
  return res.status(405).json({ message: "Method Not Allowed" });
}

export default withCORS(handler);
