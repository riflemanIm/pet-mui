import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../../lib/prisma";

const ALLOW_UPDATE_FIELDS = ["type", "price", "stock", "publishedAt"];

const foodDetailHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  switch (req.method) {
    case "GET":
      try {
        const foodDetail = await getFoodDetail(req);
        delete foodDetail.id;
        console.log("-----------id---------", foodDetail, "===");
        res.status(200).json(foodDetail);
      } catch (err: any) {
        console.error(err);
        res.status(500).json({
          message: err.message,
        });
      }
      break;
    case "PUT":
      try {
        await updateFoodDetail(req, res);
      } catch (err: any) {
        console.error(err);
        res.status(500).json({
          message: err.message,
        });
      }
      break;
    default:
      res.status(401).json({
        message: `HTTP method ${req.method} is not supported.`,
      });
  }
};

async function getFoodDetail(req: NextApiRequest) {
  // Get foodID;
  if (typeof req.query.id !== "string" && typeof req.query.id !== "number") {
    throw new Error("Invalid parameter `id`.");
  }
  const foodId = BigInt(req.query.id);

  // Get record by unique identifier.
  // Reference: https://www.prisma.io/docs/concepts/components/prisma-client/crud#get-record-by-compound-id-or-compound-unique-identifier
  const food: any = await prisma.food.findUnique({
    where: {
      id: foodId,
    },
  });

  // Aggregation.
  // Reference: https://www.prisma.io/docs/concepts/components/prisma-client/aggregation-grouping-summarizing
  const averageRating = await prisma.rating.aggregate({
    _avg: {
      score: true,
    },
    where: {
      foodId: {
        equals: foodId,
      },
    },
  });
  food.averageRating = averageRating._avg.score;

  return food;
}

async function updateFoodDetail(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  // Get foodID;
  if (typeof req.query.id !== "string" && typeof req.query.id !== "number") {
    throw new Error("Invalid parameter `id`.");
  }
  const foodId = BigInt(req.query.id);

  if (req.body == null || typeof req.body !== "object") {
    throw new Error("Invalid parameters.");
  }

  const updateData: any = {};
  for (const [key, value] of Object.entries(req.body)) {
    if (ALLOW_UPDATE_FIELDS.includes(key)) {
      updateData[key] = value;
    }
  }

  const result = await prisma.food.update({
    data: updateData,
    where: {
      id: foodId,
    },
  });

  res.status(200).json({
    message: "success",
    data: result,
  });
}

export default foodDetailHandler;
