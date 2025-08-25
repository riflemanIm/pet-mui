import type { NextApiRequest, NextApiResponse } from "next";
import {
  KNOWN_DICTS,
  DictName,
  getDictModel,
  pick,
  methodNotAllowed,
  badRequest,
  notFound,
  parseId,
  handlePrismaError,
} from "../_utils";

type ItemResponse = { id: number; name: string } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ItemResponse>
) {
  const dict = String(req.query.dict || "") as DictName;
  if (!KNOWN_DICTS.includes(dict)) return badRequest(res, "Unknown dict name");

  const id = parseId(req.query.id);
  if (!id) return badRequest(res, "Invalid id");

  const model = getDictModel(dict);

  if (req.method === "GET") {
    try {
      const row = await model.findUnique({ where: { id } });
      if (!row) return notFound(res, "Record not found");
      return res.status(200).json({ id: row.id, name: row.name });
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  if (req.method === "PUT" || req.method === "PATCH") {
    const { name } = (req.body || {}) as { name?: string };
    if (!name || !String(name).trim())
      return badRequest(res, "Field `name` is required");

    try {
      const updated = await model.update({
        where: { id },
        data: { name: String(name).trim() },
      });
      return res.status(200).json({ id: updated.id, name: updated.name });
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  if (req.method === "DELETE") {
    try {
      await model.delete({ where: { id } });
      return res.status(200).json({ id, name: "" });
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  return methodNotAllowed(res, ["GET", "PUT", "PATCH", "DELETE"]);
}
