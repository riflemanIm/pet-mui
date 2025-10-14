// pages/api/_utils/index.ts
import type { Prisma, PrismaClient } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";

/** ================= CORS ================= */
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
      res.setHeader("Access-Control-Allow-Credentials", "false");
    }

    if (req.method === "OPTIONS") return res.status(200).end();
    return handler(req, res);
  };
}

/** ================= Basics ================= */
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

/**
 * Нормализует поле сортировки по whitelisted-списку.
 * Если поле не указано/невалидно — вернётся defaultKey.
 */
export function normalizeOrderBy(
  raw: string | string[] | null | undefined,
  allowed: readonly string[] = ["id", "name"],
  defaultKey: string = allowed[0] ?? "id"
) {
  const value = Array.isArray(raw) ? raw[0] : raw;
  const key = typeof value === "string" ? value.trim() : "";
  return allowed.includes(key) ? key : defaultKey;
}

/**
 * Унифицированный парсер filter:
 * - строка → как есть
 * - JSON с { q | text | value } → берём первое непустое
 * - JSON с { items: [...] } → если пусто, возвращаем undefined
 */
export function extractQueryFromFilter(
  filter: string | null
): string | undefined {
  if (!filter) return undefined;
  try {
    const obj = JSON.parse(filter);
    if (typeof obj === "string") return obj || undefined;
    if (obj && typeof obj === "object") {
      if (Array.isArray(obj.items)) {
        // пустой items → нет фильтра
        return obj.items.length ? JSON.stringify(obj.items) : undefined;
      }
      const q = obj.q ?? obj.text ?? obj.value ?? "";
      return String(q).trim() || undefined;
    }
  } catch {
    // не JSON — просто строка
    const s = String(filter).trim();
    return s || undefined;
  }
  return undefined;
}

/**
 * where по перечисленным строковым полям (contains, case-insensitive на уровне БД коллации).
 * Если q отсутствует — вернёт undefined.
 */
export function buildWhereByFields<T extends Record<string, any>>(
  filter: string | null,
  fields: readonly string[]
): T | undefined {
  const q = extractQueryFromFilter(filter);
  if (!q) return undefined;
  const OR = fields.map((f) => ({ [f]: { contains: q } }));
  return { OR } as unknown as T;
}

/**
 * Фильтр для типовых словарей (по name) или произвольного списка строковых полей.
 * По умолчанию ищет подстроку только в name.
 */
export function buildWhere<T extends Record<string, any>>(
  filter: string | null,
  fields: readonly string[] = ["name"]
): T | undefined {
  const q = extractQueryFromFilter(filter);
  if (!q) return undefined;
  if (!fields.length) return undefined;

  if (fields.length === 1) {
    const field = fields[0];
    return { [field]: { contains: q } } as unknown as T;
  }

  const OR = fields.map((field) => ({ [field]: { contains: q } }));
  return { OR } as unknown as T;
}

export type ListPayload<T> = {
  rows: T[];
  totalCount: number;
  startIndex: number;
  count: number;
};

export const asListPayload = <T>(
  rows: T[],
  totalCount: number,
  startIndex: number,
  count: number
): ListPayload<T> => ({ rows, totalCount, startIndex, count });

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
  typeTreat: "typeTreat",
} as const;

export type EntityKey = keyof typeof ENTITY_TO_MODEL;

const ENTITY_USAGE_COUNTERS: Partial<
  Record<EntityKey, (prisma: PrismaClient, id: number) => Promise<number>>
> = {
  ages: (prisma, id) => prisma.foodAge.count({ where: { ageId: id } }),
  taste: (prisma, id) => prisma.food.count({ where: { tasteId: id } }),
  designedFor: (prisma, id) =>
    prisma.foodDesignedFor.count({ where: { designedForId: id } }),
  ingredient: (prisma, id) =>
    prisma.food.count({ where: { ingredientId: id } }),
  hardness: (prisma, id) => prisma.food.count({ where: { hardnessId: id } }),
  packages: (prisma, id) =>
    prisma.foodPackage.count({ where: { packageId: id } }),
  petSizes: (prisma, id) =>
    prisma.foodPetSize.count({ where: { petSizeId: id } }),
  specialNeeds: (prisma, id) =>
    prisma.foodSpecialNeeds.count({ where: { specialNeedsId: id } }),
  typeTreat: (prisma, id) =>
    prisma.foodTypeTreat.count({ where: { typeTreatId: id } }),
};

export function getModel(prisma: PrismaClient, entity: string) {
  const key = entity as EntityKey;
  const modelName = ENTITY_TO_MODEL[key];
  if (!modelName) return null;

  return (prisma as any)[modelName] as {
    count: (args: any) => Promise<number>;
    findMany: (args: any) => Promise<any[]>;
    findUnique: (args: any) => Promise<any | null>;
    create: (args: any) => Promise<any>;
    update: (args: any) => Promise<any>;
    delete: (args: any) => Promise<any>;
  };
}

export async function getDictUsageCount(
  prisma: PrismaClient,
  entity: string,
  id: number
) {
  const key = entity as EntityKey;
  const counter = ENTITY_USAGE_COUNTERS[key];
  if (!counter) return 0;
  try {
    return await counter(prisma, id);
  } catch (err) {
    console.error(`[api] usage check failed for ${entity}#${id}:`, err);
    return 0;
  }
}

export function handlePrismaError(res: NextApiResponse, err: any) {
  if (err && typeof err === "object" && "code" in err) {
    const code = (err as Prisma.PrismaClientKnownRequestError).code;
    if (code === "P2002") {
      return res.status(409).json({ message: "Duplicate value" });
    }
    if (code === "P2025") {
      return res.status(404).json({ message: "Record not found" });
    }
  }

  console.error("[api] prisma error:", err);
  return res.status(500).json({ message: "Internal Server Error" });
}

// ...дополнение к pages/api/_utils/index.ts
// null-safe helper: never returns null
export const first = <T>(v: T | T[] | null | undefined): T | undefined => {
  if (Array.isArray(v)) return (v[0] as T) ?? undefined;
  return v == null ? undefined : (v as T);
};

export const strOrNull = (v: any): string | null => {
  const s = first<string>(v);
  if (s === undefined || s === null) return null;
  const sv = String(s);
  return sv === "" ? null : sv;
};

export const numOrNull = (v: any): number | null => {
  const s = first<string | number>(v);
  if (s === undefined || s === null || s === "") return null;
  const n = Number(s);
  return Number.isFinite(n) ? n : null;
};

export const boolOrUndefined = (v: any): boolean | undefined => {
  const s = first<string | boolean>(v);
  if (s === undefined || s === null || s === "") return undefined;
  return String(s) === "true" || s === true;
};

/** "1,2,3" | "[1,2]" | ["1","2"] | "1\n2" -> number[] */
export const toIdArray = (v: any): number[] => {
  const collect = (value: any): number[] => {
    if (value === null || value === undefined) return [];
    if (Array.isArray(value)) {
      return value.flatMap((item) => collect(item));
    }

    const primitive = first<any>(value);
    if (primitive === null || primitive === undefined) return [];

    if (typeof primitive === "number") {
      return Number.isFinite(primitive) ? [primitive] : [];
    }

    const str = String(primitive).trim();
    if (!str) return [];

    try {
      const parsed = JSON.parse(str);
      if (Array.isArray(parsed)) return collect(parsed);
      if (typeof parsed === "number")
        return Number.isFinite(parsed) ? [parsed] : [];
    } catch {
      // not JSON — fall through
    }

    return str
      .split(/[\n,]/g)
      .map((part) => part.trim())
      .filter(Boolean)
      .map((part) => Number(part))
      .filter(Number.isFinite);
  };

  const result = collect(v);
  return Array.from(new Set(result));
};

export type DictRow = { id: number; name: string };
export const pick = <T extends { id: number; name: string }>(
  rows: T[]
): DictRow[] => rows.map(({ id, name }) => ({ id, name }));
