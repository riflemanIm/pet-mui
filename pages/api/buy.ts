import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";
type DataType = {
  foodId: number;
  quality: number;
};

const buyFoodHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  if (req.method === "POST") {
    try {
      if (
        typeof req.body.userId !== "string" &&
        typeof req.body.userId !== "number"
      ) {
        throw new Error("Invalid parameter `userId`.");
      }
      console.log("req.body", req.body);
      const userId = parseInt(req.body.userId, 10);

      if (!Array.isArray(req.body.data)) {
        throw new Error("Body 'data' is NOT array");
      }
      const data = req.body.data;
      let result = [] as any[];
      data.forEach(async (item: DataType) => {
        // Check foodID;
        if (
          typeof item.foodId !== "string" &&
          typeof item.foodId !== "number"
        ) {
          throw new Error("Invalid parameter `foodId`.");
        }

        const foodId = BigInt(item.foodId);

        // Check quality;
        if (
          typeof item.quality !== "string" &&
          typeof item.quality !== "number"
        ) {
          throw new Error("Invalid parameter `quality`.");
        }
        if (item.quality <= 0) {
          throw new Error("Parameter `quality` must greater than zero.");
        }

        const quality = item.quality;

        const tmp = await buyFood(userId, foodId, quality);
        console.log("order", tmp);
        result.push(tmp);
      });
      console.log("result", result);
      res.status(200).json({
        message: "Successfully buy",
        data: result,
      });
    } catch (err: any) {
      console.error(err);
      res.status(500).json({
        message: err.message,
      });
    }
  } else {
    res.status(401).json({
      message: `HTTP method ${req.method} is not supported.`,
    });
  }
};

async function buyFood(
  userId: number,
  foodId: bigint,
  quality: number
): Promise<any> {
  try {
    const result = await prisma.$transaction(async (prisma) => {
      // Found the food that the user want to purchase.
      const food = await prisma.food.findFirst({
        where: {
          id: foodId,
        },
      });

      if (food === undefined || food === null) {
        throw new Error(
          `Can not found the food <${foodId}> that you want to buy.`
        );
      }

      // Check if has enough foods for the user purchase.
      const stock = food.stock;

      if (quality > stock) {
        throw new Error(
          `Didn't have enough stock of food <${foodId}> for your purchase.`
        );
      }

      // Cost the user balance to buy the food.
      const cost = food?.price.mul(quality).toNumber();
      const purchaser = await prisma.user.update({
        data: {
          balance: {
            decrement: cost,
          },
        },
        where: {
          id: userId,
        },
      });

      if (purchaser.balance.lt(0)) {
        throw new Error(
          `User <${userId}> doesn't have enough money to buy food <${foodId}>, which need to cost ${cost}.`
        );
      }

      // Update the food stock.
      const newFood = await prisma.food.update({
        data: {
          stock: {
            decrement: quality,
          },
        },
        where: {
          id: foodId,
        },
      });
      if (newFood.stock < 0) {
        throw new Error(`The food ${newFood.stock} is out of stock.`);
      }

      // Generate a new order to record.
      const order = await prisma.order.create({
        data: {
          userId: userId,
          foodId: foodId,
          quality: quality,
        },
      });

      return {
        userId: userId,
        foodId: foodId,
        foodTitle: food.title,
        cost: cost,
        remaining: purchaser.balance,
        orderId: order.id,
      };
    });

    return {
      message: `User <${userId}> buy ${quality} foods <${foodId}> successfully, cost: ${result.cost}, remain: ${result.remaining} .`,
      data: result,
    };
  } catch (err: any) {
    console.error(err);
    return {
      message: `Failed to buy food ${foodId} for user ${userId}: ${err.message}`,
    };
  }
}

export default buyFoodHandler;
