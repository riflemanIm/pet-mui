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

  if (req.method === "GET") {
    res.status(200).json({ foodTypes, ages, taste });
  } else {
    res.status(401).json({
      message: `HTTP method ${req.method} is not supported.`,
    });
  }
};

export default foodAgeListHandler;