// pages/api/food/index.ts — aligned with current schema & existing client params
import type { NextApiRequest, NextApiResponse } from "next";
import { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

function asInt(val: unknown, fallback: number): number {
  const n = Number(val);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : fallback;
}
function asFloat(val: unknown): number | undefined {
  if (val === undefined || val === null || val === "") return undefined;
  const n = Number(val);
  return Number.isFinite(n) ? n : undefined;
}
function asBool(val: unknown): boolean | undefined {
  if (val === undefined) return undefined;
  if (val === "true" || val === true) return true;
  if (val === "false" || val === false) return false;
  return undefined;
}
function splitIds(v: unknown): number[] | undefined {
  if (!v) return undefined;
  const arr = Array.isArray(v) ? v : String(v).split(",");
  const ids = arr
    .map((x) => Number(String(x).trim()))
    .filter((n) => Number.isFinite(n) && n > 0) as number[];
  return ids.length ? ids : undefined;
}

// Accept both new and legacy sort keys
function mapSortField(v: unknown): "price" | "publishedAt" {
  const s = String(v || "publishedAt");
  if (s === "price") return "price";
  if (s === "publishedAt" || s === "published_at") return "publishedAt";
  return "publishedAt";
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      res.setHeader("Allow", ["GET"]);
      return res.status(405).json({ error: "Method Not Allowed" });
    }

    // --- Query params (support old names from the frontend) ---
    const q = (req.query.q as string) || undefined;
    const page = (req.query.page as string) || "1";
    const pageSize =
      (req.query.pageSize as string) || (req.query.size as string) || "12";

    const sortField = mapSortField(req.query.sort);
    const order =
      (req.query.order as string) === "asc" ? "asc" : ("desc" as const);

    const minPrice = asFloat(req.query.minPrice);
    const maxPrice = asFloat(req.query.maxPrice);
    const isPromo = asBool(req.query.isPromo);
    const vat = asBool(req.query.vat);

    // One-to-many (single id)
    const tasteId = req.query.taste ? Number(req.query.taste) : undefined;
    const ingredientId = req.query.ingredient
      ? Number(req.query.ingredient)
      : undefined;
    const hardnessId = req.query.hardness
      ? Number(req.query.hardness)
      : undefined;

    // Many-to-many (comma-separated ids) — support both legacy and new names
    const designedFor = splitIds(
      req.query.designedFor ?? req.query.designedForIds
    );
    const ages = splitIds(req.query.ages ?? req.query.ageIds);
    const typeTreats = splitIds(req.query.typeTreatIds); // no legacy key seen on FE
    const petSizes = splitIds(req.query.petSizes ?? req.query.petSizeIds);
    const packages = splitIds(req.query.packages ?? req.query.packageIds);
    const specialNeeds = splitIds(
      req.query.specialNeeds ?? req.query.specialNeedsIds
    );

    const pageNum = asInt(page, 1);
    const take = asInt(pageSize, 12);
    const skip = (pageNum - 1) * take;

    const where: Prisma.FoodWhereInput = {
      ...(q
        ? {
            OR: [
              { title: { contains: String(q) } as any },
              { feature: { contains: String(q) } as any },
              { annotation: { contains: String(q) } as any },
              { artikul: { contains: String(q) } as any },
            ],
          }
        : {}),
      ...(isPromo !== undefined ? { isPromo } : {}),
      ...(vat !== undefined ? { vat } : {}),
      ...(minPrice !== undefined || maxPrice !== undefined
        ? {
            price: {
              ...(minPrice !== undefined ? { gte: minPrice } : {}),
              ...(maxPrice !== undefined ? { lte: maxPrice } : {}),
            },
          }
        : {}),
      ...(tasteId ? { tasteId } : {}),
      ...(ingredientId ? { ingredientId } : {}),
      ...(hardnessId ? { hardnessId } : {}),
      ...(designedFor
        ? { designed: { some: { designedForId: { in: designedFor } } } }
        : {}),
      ...(ages ? { ages: { some: { ageId: { in: ages } } } } : {}),
      ...(typeTreats
        ? { typeTreats: { some: { typeTreatId: { in: typeTreats } } } }
        : {}),
      ...(petSizes
        ? { petSizes: { some: { petSizeId: { in: petSizes } } } }
        : {}),
      ...(packages
        ? { foodPackage: { some: { packageId: { in: packages } } } }
        : {}),
      ...(specialNeeds
        ? { specialNeeds: { some: { specialNeedsId: { in: specialNeeds } } } }
        : {}),
    };

    const [total, items] = await prisma.$transaction([
      prisma.food.count({ where }),
      prisma.food.findMany({
        where,
        orderBy: { [sortField]: order },
        skip,
        take,
        include: {
          taste: true,
          ingredient: true,
          hardness: true,
          imgsAdd: true,
          designed: { include: { designedFor: true } },
          ages: { include: { age: true } },
          typeTreats: { include: { typeTreat: true } },
          petSizes: { include: { petSize: true } },
          foodPackage: { include: { package: true } },
          specialNeeds: { include: { specialNeeds: true } },
          ratings: true,
        },
      }),
    ]);

    return res
      .status(200)
      .json({ page: pageNum, pageSize: take, total, items });
  } catch (err) {
    console.error("/api/food error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
