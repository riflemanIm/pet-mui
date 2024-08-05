import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../lib/prisma";
import { getError } from "helpers";
type DataType = {
  foodId: number;
  quality: number;
};
type DataTypeChecked = {
  foodId: bigint;
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

      const userId = parseInt(req.body.userId, 10);

      if (!Array.isArray(req.body.data)) {
        throw new Error("Body 'data' is NOT array");
      }

      const data = req.body.data.map((item: DataType) => {
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

        return { foodId, quality };
      });

      const result = await buyFood(data, userId);
      console.log("result", result);
      res.status(result.status).json(result);
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

async function buyFood(data: DataTypeChecked[], userId: number): Promise<any> {
  try {
    let result = [] as any[];
    await prisma.$transaction(async (tr) => {
      // Found the food that the user want to purchase.
      for (const item of data) {
        const food = await tr.food.findFirst({
          where: {
            id: item.foodId,
          },
        });

        if (food === undefined || food === null) {
          throw new Error(`<${item.foodId || ""}> - не найден`);
        }

        // Check if has enough foods for the user purchase.
        const stock = food.stock;
        //console.log("-- quality", item.quality, "stock", stock, "\n");
        if (item.quality > stock) {
          throw new Error(`"${food.title}" -  нет нужного количества`);
        }

        // Cost the user balance to buy the food.
        // const cost = food?.price.mul(item.quality).toNumber();

        // const purchaser = await tr.user.update({
        //   data: {
        //     balance: {
        //       decrement: cost,
        //     },
        //   },
        //   where: {
        //     id: userId,
        //   },
        // });

        // if (purchaser.balance.lt(0)) {
        //   throw new Error(
        //     `User <${userId}> doesn't have enough money to buy food <${item.foodId}>, which need to cost ${cost}.`
        //   );
        // }

        // Update the food stock.
        const newFood = await tr.food.update({
          data: {
            stock: {
              decrement: item.quality,
            },
          },
          where: {
            id: item.foodId,
          },
        });
        if (newFood.stock < 0) {
          throw new Error(`The food ${newFood.stock} is out of stock.`);
        }

        // Generate a new order to record.
        await tr.order.create({
          data: {
            userId,
            foodId: item.foodId,
            quality: item.quality,
          },
        });

        result.push({
          userId,
          foodId: Number(item.foodId),
          foodTitle: food.title,
          //cost,
          //remaining: purchaser.balance,
        });
      }
    });
    return {
      status: 200,
      message: `User ${userId} buy  foods  successfully`,
      result,
    };
  } catch (err: any) {
    //console.error(err);
    return {
      status: 400,
      message: getError(err.message),
    };
  }
}

export default buyFoodHandler;
