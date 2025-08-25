import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../lib/prisma";
import { pick } from "./_utils";

type Dict = { id: number; name: string };
type DictsPayload = {
  foodTypes: Dict[];
  ages: Dict[];
  taste: Dict[];
  designedFor: Dict[];
  ingredient: Dict[];
  hardness: Dict[];
  packages: Dict[];
  petSizes: Dict[];
  specialNeeds: Dict[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<DictsPayload | { error: string }>
) {
  if (req.method !== "GET") {
    res.setHeader("Allow", ["GET"]);
    return res.status(405).json({ error: "Method Not Allowed" });
  }

  try {
    const [
      typeTreat,
      ages,
      taste,
      designedFor,
      ingredient,
      hardness,
      packages,
      petSizes,
      specialNeeds,
    ] = await Promise.all([
      prisma.typeTreat.findMany({ orderBy: { name: "asc" } }),
      prisma.age.findMany({ orderBy: { name: "asc" } }),
      prisma.taste.findMany({ orderBy: { name: "asc" } }),
      prisma.designedFor.findMany({ orderBy: { name: "asc" } }),
      prisma.ingredient.findMany({ orderBy: { name: "asc" } }),
      prisma.hardness.findMany({ orderBy: { name: "asc" } }),
      prisma.package.findMany({ orderBy: { name: "asc" } }),
      prisma.petSize.findMany({ orderBy: { name: "asc" } }),
      prisma.specialNeeds.findMany({ orderBy: { name: "asc" } }),
    ]);

    const payload: DictsPayload = {
      foodTypes: pick(typeTreat),
      ages: pick(ages),
      taste: pick(taste),
      designedFor: pick(designedFor),
      ingredient: pick(ingredient),
      hardness: pick(hardness),
      packages: pick(packages),
      petSizes: pick(petSizes),
      specialNeeds: pick(specialNeeds),
    };

    res.setHeader(
      "Cache-Control",
      "public, max-age=60, s-maxage=300, stale-while-revalidate=600"
    );
    return res.status(200).json(payload);
  } catch (err) {
    console.error("/api/dicts error", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}
