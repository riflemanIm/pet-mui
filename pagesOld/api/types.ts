import { NextApiRequest, NextApiResponse } from "next";

import { FoodType } from "@prisma/client";

const foodTypes = Object.values(FoodType);

const foodTypeListHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  if (req.method === "GET") {
    res.status(200).json(foodTypes);
  } else {
    res.status(401).json({
      message: `HTTP method ${req.method} is not supported.`,
    });
  }
};

export default foodTypeListHandler;
