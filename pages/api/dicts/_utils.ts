import type { NextApiResponse } from "next";
import type { Prisma } from "@prisma/client";
import prisma from "../../../lib/prisma";

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

// Привязка имени справочника к Prisma‑модели
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
  // P2002 — unique constraint violation
  if (err && typeof err === "object" && "code" in err) {
    const code = (err as Prisma.PrismaClientKnownRequestError).code;
    if (code === "P2002") {
      return res.status(409).json({ error: "Duplicate name" });
    }
    if (code === "P2025") {
      return notFound(res, "Record not found");
    }
  }
  console.error("[dicts] prisma error:", err);
  return res.status(500).json({ error: "Internal Server Error" });
}
