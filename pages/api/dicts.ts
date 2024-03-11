import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

import { FoodType } from "@prisma/client";

const foodTypes = Object.values(FoodType);

const foodAgeListHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const ages = await prisma.age.findMany();
  const taste = await prisma.taste.findMany();
  const packages = await prisma.package.findMany();
  const designedFor = await prisma.designedFor.findMany();
  const ingridient = await prisma.ingridient.findMany();
  const hardness = await prisma.hardness.findMany();
  const petSizes = await prisma.petSize.findMany();

  //console.log("hardness", hardness);
  if (req.method === "GET") {
    res.status(200).json({
      foodTypes,
      ages,
      taste,
      packages,
      designedFor,
      ingridient,
      hardness,
      petSizes,
    });
  } else {
    res.status(401).json({
      message: `HTTP method ${req.method} is not supported.`,
    });
  }
};

export default foodAgeListHandler;
