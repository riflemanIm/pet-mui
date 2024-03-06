import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";

const foodAgeListHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const age = await prisma.age.findMany();
  if (req.method === "GET") {
    res.status(200).json(age);
  } else {
    res.status(401).json({
      message: `HTTP method ${req.method} is not supported.`,
    });
  }
};

export default foodAgeListHandler;
