import type { Prisma, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";

/** ====== CORS ====== */
const ALLOWED_ORIGINS = (process.env.ADMIN_ORIGINS || "")
  .split(",")
  .map((s) => s.trim())
  .filter(Boolean);

export function withCORS(
  handler: (req: NextApiRequest, res: NextApiResponse) => any
) {
  return async (req: NextApiRequest, res: NextApiResponse) => {
    const origin = req.headers.origin || "";
    const allowOrigin =
      ALLOWED_ORIGINS.length === 0
        ? "*"
        : ALLOWED_ORIGINS.includes(origin)
        ? origin
        : "";

    if (allowOrigin) {
      res.setHeader("Access-Control-Allow-Origin", allowOrigin);
      res.setHeader("Vary", "Origin");
      res.setHeader(
        "Access-Control-Allow-Methods",
        "GET,POST,PUT,PATCH,DELETE,OPTIONS"
      );
      res.setHeader(
        "Access-Control-Allow-Headers",
        "Content-Type, Authorization"
      );
      // без credentials, чтобы не упираться в куки
      res.setHeader("Access-Control-Allow-Credentials", "false");
    }

    if (req.method === "OPTIONS") return res.status(200).end();
    return handler(req, res);
  };
}

/** ====== Types & utils ====== */
export interface DictDto {
  id?: number;
  name: string | null;
}

export type OrderDir = "asc" | "desc";

export const asInt = (v: any, d = 0) => {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : d;
};
export const asCount = (v: any, d = 50, max = 200) => {
  const n = asInt(v, d);
  return Math.min(max, Math.max(1, n));
};
export const asOrder = (v: any): OrderDir =>
  String(v).toLowerCase() === "desc" ? "desc" : "asc";

/** ДОБАВЛЕНО: числа/булевы/списки */
export const asFloat = (v: any): number | undefined => {
  if (v === undefined || v === null || v === "") return undefined;
  const n = Number(v);
  return Number.isFinite(n) ? n : undefined;
};
export const asBool = (v: any): boolean | undefined => {
  if (v === undefined) return undefined;
  if (v === true || v === "true" || v === 1 || v === "1") return true;
  if (v === false || v === "false" || v === 0 || v === "0") return false;
  return undefined;
};
export function splitIds(v: unknown): number[] | undefined {
  if (!v) return undefined;
  const arr = Array.isArray(v) ? v : String(v).split(",");
  const ids = arr
    .map((x) => Number(String(x).trim()))
    .filter((n) => Number.isFinite(n) && n > 0) as number[];
  return ids.length ? ids : undefined;
}

/** filter допускает строку ИЛИ JSON с q/text/value */
export function buildWhere(filter: string | null) {
  if (!filter) return undefined;
  let q = filter;
  try {
    const obj = JSON.parse(filter);
    q = typeof obj === "string" ? obj : obj?.q ?? obj?.text ?? obj?.value ?? "";
  } catch {
    /* not json */
  }
  if (!q || !String(q).trim()) return undefined;
  // В MySQL обычно коллация уже case-insensitive, поэтому без mode
  return { name: { contains: q } };
}

/** ДОБАВЛЕНО: универсальный buildWhere по нескольким строковым полям */
export function buildWhereByFields<TWhere extends Record<string, any>>(
  filter: string | null,
  stringFields: readonly string[]
): TWhere | undefined {
  if (!filter) return undefined;
  let q = filter;
  try {
    const obj = JSON.parse(filter);
    q = typeof obj === "string" ? obj : obj?.q ?? obj?.text ?? obj?.value ?? "";
  } catch {
    /* not json */
  }
  if (!q || !String(q).trim()) return undefined;

  const OR = stringFields.map((f) => ({ [f]: { contains: q } }));
  return { OR } as unknown as TWhere;
}

export const asListPayload = (
  rows: any[],
  totalCount: number,
  startIndex: number,
  count: number
) => ({ rows, totalCount, startIndex, count });

/** entity -> prisma model name */
export const ENTITY_TO_MODEL = {
  ages: "age",
  taste: "taste",
  designedFor: "designedFor",
  ingredient: "ingredient",
  hardness: "hardness",
  packages: "package",
  petSizes: "petSize",
  specialNeeds: "specialNeeds",
  // на будущее:
  typeTreats: "typeTreat",
} as const;

export type EntityKey = keyof typeof ENTITY_TO_MODEL;

export function getModel(prismaClient: PrismaClient, entity: string) {
  const key = entity as EntityKey;
  const modelName = ENTITY_TO_MODEL[key];
  if (!modelName) return null;
  return (prismaClient as any)[modelName] as {
    count: (args: any) => Promise<number>;
    findMany: (args: any) => Promise<any[]>;
    findUnique: (args: any) => Promise<any | null>;
    create: (args: any) => Promise<any>;
    update: (args: any) => Promise<any>;
    delete: (args: any) => Promise<any>;
  };
}

/** ДОБАВЛЕНО: alias, чтобы в коде можно было использовать оба имени */
export const prismaModel = getModel;

/** normalizeOrderBy:
 * - без whitelist: как прежде (только id|name для словарей)
 * - с whitelist: проверяем по списку допустимых полей, иначе fallback
 */
export function normalizeOrderBy(
  orderByRaw: string | null,
  whitelist?: readonly string[],
  fallback: string = "id"
) {
  const key = (orderByRaw || fallback).trim();
  if (!whitelist) {
    return key === "name" ? "name" : "id";
  }
  return whitelist.includes(key) ? key : fallback;
}

export type DictRow = { id: number; name: string };

export type DictName =
  | "foodTypes" // TypeTreat
  | "ages" // Age
  | "taste" // Taste
  | "designedFor" // DesignedFor
  | "ingredient" // ingredient (нижний регистр в Prisma)
  | "hardness" // Hardness
  | "packages" // Package
  | "petSizes" // PetSize
  | "specialNeeds"; // SpecialNeeds

export const KNOWN_DICTS: DictName[] = [
  "foodTypes",
  "ages",
  "taste",
  "designedFor",
  "ingredient",
  "hardness",
  "packages",
  "petSizes",
  "specialNeeds",
];

// Привязка имени справочника к Prisma-модели
export function getDictModel(dict: DictName) {
  switch (dict) {
    case "foodTypes":
      return prisma.typeTreat;
    case "ages":
      return prisma.age;
    case "taste":
      return prisma.taste;
    case "designedFor":
      return prisma.designedFor;
    case "ingredient":
      return prisma.ingredient; // модель в схеме — с маленькой буквы
    case "hardness":
      return prisma.hardness;
    case "packages":
      return prisma.package;
    case "petSizes":
      return prisma.petSize;
    case "specialNeeds":
      return prisma.specialNeeds;
  }
}

export const pick = <T extends { id: number; name: string }>(
  rows: T[]
): DictRow[] => rows.map(({ id, name }) => ({ id, name }));

export function parseId(v: unknown): number | null {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : null;
}

/** ДОБАВЛЕНО: гарантированно получить корректный id из req.query.id */
export function requireId(
  req: NextApiRequest,
  res: NextApiResponse
): number | null {
  const id = Number(req.query.id);
  if (!Number.isFinite(id) || id <= 0) {
    res.status(400).json({ message: "Invalid id" });
    return null;
  }
  return id;
}

/** ДОБАВЛЕНО: удобный маппер для createMany при M:N */
export const mapIds = (ids?: number[], map?: (id: number) => any) =>
  ids && ids.length ? (map ? ids.map(map) : [...ids]) : [];

export function methodNotAllowed(res: NextApiResponse, methods: string[]) {
  res.setHeader("Allow", methods);
  return res.status(405).json({ error: "Method Not Allowed" });
}

export function badRequest(res: NextApiResponse, msg = "Bad Request") {
  return res.status(400).json({ error: msg });
}

export function notFound(res: NextApiResponse, msg = "Not Found") {
  return res.status(404).json({ error: msg });
}

export function handlePrismaError(res: NextApiResponse, err: any) {
  // P2002 — unique constraint violation, P2025 — record not found
  if (err && typeof err === "object" && "code" in err) {
    const code = (err as Prisma.PrismaClientKnownRequestError).code;
    if (code === "P2002") {
      return res.status(409).json({ error: "Duplicate name" });
    }
    if (code === "P2025") {
      return notFound(res, "Record not found");
    }
  }
  console.error("[api] prisma error:", err);
  return res.status(500).json({ error: "Internal Server Error" });
}

export const toStrIfBigInt = (v: any) =>
  typeof v === "bigint" ? v.toString() : v;
