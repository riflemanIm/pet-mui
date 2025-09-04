// pages/api/food/[id].ts
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

const ALLOW_UPDATE_FIELDS = ["type", "price", "stock", "publishedAt"] as const;
type Updatable = (typeof ALLOW_UPDATE_FIELDS)[number];

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "GET") {
      const food = await getFoodDetail(req);
      return res.status(200).json(food);
    }

    if (req.method === "PUT") {
      const result = await updateFoodDetail(req);
      return res.status(200).json({ message: "success", data: result });
    }

    res.setHeader("Allow", ["GET", "PUT"]);
    return res
      .status(405)
      .json({ message: `HTTP method ${req.method} is not supported.` });
  } catch (err: any) {
    console.error("[food/:id] error:", err?.message || err);
    return res
      .status(500)
      .json({ message: err?.message ?? "Internal Server Error" });
  }
}

function requireId(req: NextApiRequest): number {
  const { id } = req.query;
  const n = Number(Array.isArray(id) ? id[0] : id);
  if (!Number.isFinite(n) || n <= 0) throw new Error("Invalid parameter `id`.");
  return n;
}

async function getFoodDetail(req: NextApiRequest) {
  const foodId = requireId(req);

  const food = await prisma.food.findUnique({
    where: { id: foodId },
    include: {
      // если нужно — добавь taste/ingredient/hardness и т.п.
    },
  });
  if (!food) throw new Error("Food not found");

  // доп. изображения
  const imgsAdd = await prisma.foodImgAdd.findMany({
    select: { img: true },
    where: { foodId },
  });

  // средний рейтинг
  const averageRatingAgg = await prisma.rating.aggregate({
    _avg: { score: true },
    where: { foodId },
  });

  return {
    ...food,
    foodImgAdd: imgsAdd, // [{img: string}]
    averageRating: averageRatingAgg._avg.score ?? null,
  };
}

async function updateFoodDetail(req: NextApiRequest) {
  const foodId = requireId(req);
  const body = req.body;
  if (body == null || typeof body !== "object")
    throw new Error("Invalid parameters.");

  const data: Partial<Record<Updatable, any>> = {};
  for (const [key, value] of Object.entries(body)) {
    if ((ALLOW_UPDATE_FIELDS as readonly string[]).includes(key)) {
      (data as any)[key] = value;
    }
  }

  // Приведение типов для числовых полей
  if ("price" in data && data.price != null)
    data.price = Number(data.price) || 0;
  if ("stock" in data && data.stock != null)
    data.stock = Number(data.stock) || 0;

  const result = await prisma.food.update({
    where: { id: foodId },
    data,
  });

  return result;
}
