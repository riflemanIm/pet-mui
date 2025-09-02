import type { NextApiResponse } from "next";
import type { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";
import md5 from "md5";

// Твой DTO
export interface UserDto {
  userId?: number;
  password?: string;
  email?: string;
  name: string | null;
  balance: any; // Decimal -> строка
}

export type OrderDir = "asc" | "desc";

export function parseIntSafe(v: any, d = 0) {
  const n = Number(v);
  return Number.isFinite(n) ? Math.max(0, Math.floor(n)) : d;
}
export function parseCount(v: any, d = 50, max = 200) {
  const n = parseIntSafe(v, d);
  return Math.min(max, Math.max(1, n));
}
export function parseOrder(v: any): OrderDir {
  return String(v).toLowerCase() === "desc" ? "desc" : "asc";
}
export function parseId(v: any): number | null {
  const n = Number(v);
  return Number.isFinite(n) && n > 0 ? Math.floor(n) : null;
}

export function buildWhere(
  filter: string | null
): Prisma.UserWhereInput | undefined {
  if (!filter) return undefined;

  let q = filter;
  try {
    const obj = JSON.parse(filter);
    q = typeof obj === "string" ? obj : obj?.q ?? obj?.text ?? obj?.value ?? "";
  } catch {
    /* not json */
  }

  if (!q || !String(q).trim()) return undefined;

  return {
    OR: [
      { email: { contains: q } }, // без mode
      { name: { contains: q } }, // без mode
    ],
  };
}
export function mapOrder(
  orderBy: string | null,
  dir: OrderDir
): Prisma.Enumerable<Prisma.UserOrderByWithRelationInput> {
  // нормализация alias'ов
  const key = (orderBy || "id").trim();
  const field =
    key === "userId"
      ? "id"
      : key === "createdAt"
      ? "createdAt"
      : key === "email"
      ? "email"
      : key === "name"
      ? "name"
      : key === "balance"
      ? "balance"
      : "id";

  return [
    { [field]: dir },
  ] as Prisma.Enumerable<Prisma.UserOrderByWithRelationInput>;
}
export function toDto(u: {
  id: number;
  email: string;
  name: string | null;
  balance: Prisma.Decimal;
}): UserDto {
  return {
    userId: u.id,
    email: u.email,
    name: u.name,
    balance: u.balance?.toString?.() ?? String(u.balance),
  };
}

// Данные для create/update
// CREATE: готовим данные под prisma.user.create({ data })
export function buildUserCreateData(
  body: any
): Prisma.UserUncheckedCreateInput {
  const data: Partial<Prisma.UserUncheckedCreateInput> = {};

  if (typeof body?.email === "string") data.email = body.email.trim();
  if (body?.name === null || typeof body?.name === "string")
    data.name = body.name ?? null;

  // Decimal допускает строку/число — Prisma приведёт
  if (body?.balance !== undefined) data.balance = body.balance;

  if (typeof body?.password === "string" && body.password.trim() !== "") {
    // NB: лучше bcrypt/argon2
    data.password = md5(body.password.trim());
  }

  // критично: не передавать id
  delete (data as any).id;

  return data as Prisma.UserUncheckedCreateInput;
}

// UPDATE: готовим данные под prisma.user.update({ data })
export function buildUserUpdateData(
  body: any
): Prisma.UserUncheckedUpdateInput {
  const data: Partial<Prisma.UserUncheckedUpdateInput> = {};

  if (typeof body?.email === "string") data.email = body.email.trim();
  if (body?.name === null || typeof body?.name === "string")
    data.name = body.name ?? null;

  if (body?.balance !== undefined) data.balance = body.balance;

  if (typeof body?.password === "string" && body.password.trim() !== "") {
    data.password = md5(body.password.trim());
  }

  // критично: не передавать id
  delete (data as any).id;

  return data as Prisma.UserUncheckedUpdateInput;
}

export function handlePrismaError(res: NextApiResponse, err: any) {
  if (err && typeof err === "object" && "code" in err) {
    const code = (err as Prisma.PrismaClientKnownRequestError).code;
    if (code === "P2002")
      return res.status(409).json({ message: "Email already exists" });
    if (code === "P2025")
      return res.status(404).json({ message: "User not found" });
  }
  console.error("[users] prisma error:", err);
  return res.status(500).json({ message: "Internal Server Error" });
}
