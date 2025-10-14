import type { Prisma, Role as PrismaRole } from "@prisma/client";
import md5 from "md5";
import type { Role, UserDto } from "types";

// --- Примитивы счётчиков/сортировки → используем общие утилиты ---
import { asCount, asInt, asOrder, normalizeOrderBy } from "../_utils";

export const parseIntSafe = asInt;
export const parseCount = asCount;
export const parseOrder = asOrder;

export const parseId = (v: any): number | null => {
  const n = asInt(v, 0);
  return n > 0 ? n : null;
};

export function mapOrder(
  orderBy: string | null,
  dir: "asc" | "desc"
): Prisma.Enumerable<Prisma.UserOrderByWithRelationInput> {
  const allowed: Array<keyof Prisma.UserOrderByWithRelationInput> = [
    "id",
    "email",
    "name",
    "createdAt",
    "role",
  ];
  const key = normalizeOrderBy(orderBy, allowed as unknown as string[], "id");
  return [{ [key]: dir } as Prisma.UserOrderByWithRelationInput];
}

export function toDto(u: {
  id: number;
  email: string;
  name: string | null;
  balance: Prisma.Decimal;
  role: PrismaRole;
}): UserDto {
  return {
    userId: u.id,
    email: u.email,
    name: u.name,
    balance: u.balance?.toString?.() ?? String(u.balance),
    role: u.role as Role,
  };
}

function parseRole(value: any): PrismaRole | undefined {
  if (value === "Admin" || value === "User") {
    return value as PrismaRole;
  }
  return undefined;
}

export function buildUserCreateData(
  body: any
): Prisma.UserUncheckedCreateInput {
  const data: Partial<Prisma.UserUncheckedCreateInput> = {};

  if (typeof body?.email === "string") data.email = body.email.trim();
  if (body?.name === null || typeof body?.name === "string")
    data.name = body.name ?? null;
  if (body?.balance !== undefined) data.balance = body.balance;
  const parsedRole = parseRole(body?.role);
  data.role = parsedRole ?? "User";

  if (typeof body?.password === "string" && body.password.trim() !== "") {
    data.password = md5(body.password.trim());
  }

  delete (data as any).id;

  return data as Prisma.UserUncheckedCreateInput;
}

export function buildUserUpdateData(
  body: any
): Prisma.UserUncheckedUpdateInput {
  const data: Partial<Prisma.UserUncheckedUpdateInput> = {};

  if (typeof body?.email === "string") data.email = body.email.trim();
  if (body?.name === null || typeof body?.name === "string")
    data.name = body.name ?? null;
  if (body?.balance !== undefined) data.balance = body.balance;
  const parsedRole = parseRole(body?.role);
  if (parsedRole) {
    data.role = parsedRole;
  }

  if (typeof body?.password === "string" && body.password.trim() !== "") {
    data.password = md5(body.password.trim());
  }

  delete (data as any).id;

  return data as Prisma.UserUncheckedUpdateInput;
}

export { handlePrismaError } from "../_utils";
