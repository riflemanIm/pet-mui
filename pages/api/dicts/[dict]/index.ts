import type { NextApiRequest, NextApiResponse } from "next";
import {
  KNOWN_DICTS,
  DictName,
  getDictModel,
  pick,
  methodNotAllowed,
  badRequest,
  handlePrismaError,
} from "./_utils";

type ListResponse =
  | { content: { id: number; name: string }[]; total: number }
  | { error: string };
type CreateResponse = { id: number; name: string } | { error: string };

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<ListResponse | CreateResponse>
) {
  const dict = String(req.query.dict || "") as DictName;
  if (!KNOWN_DICTS.includes(dict)) return badRequest(res, "Unknown dict name");

  const model = getDictModel(dict);

  if (req.method === "GET") {
    // query: ?q=, ?page=1, ?limit=50
    const q = (req.query.q as string | undefined)?.trim();
    const page = Math.max(1, parseInt(String(req.query.page ?? "1"), 10) || 1);
    const limit = Math.min(
      100,
      Math.max(1, parseInt(String(req.query.limit ?? "100"), 10) || 100)
    );
    const skip = (page - 1) * limit;

    const where = q ? ({ name: { contains: q } } as any) : undefined;

    try {
      const [total, rows] = await Promise.all([
        model.count({ where }),
        model.findMany({ where, orderBy: { name: "asc" }, skip, take: limit }),
      ]);
      return res.status(200).json({ content: pick(rows), total });
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  if (req.method === "POST") {
    // body: { name: string }
    const { name } = (req.body || {}) as { name?: string };
    if (!name || !String(name).trim())
      return badRequest(res, "Field `name` is required");

    try {
      const created = await model.create({
        data: { name: String(name).trim() },
      });
      return res.status(201).json({ id: created.id, name: created.name });
    } catch (err) {
      return handlePrismaError(res, err);
    }
  }

  return methodNotAllowed(res, ["GET", "POST"]);
}
