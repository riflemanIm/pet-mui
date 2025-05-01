import { NextApiRequest, NextApiResponse } from "next";

import prisma from "../../../../lib/prisma";
import { getRandomInt } from "../../../../srcOld/helpers";

const buyFoodHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  if (req.method === "POST") {
    try {
      const result = await buyFood(req);
      res.status(result.status).json({
        message: result.message,
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

async function buyFood(req: NextApiRequest): Promise<any> {
  // Get foodID;
  if (typeof req.query.id !== "string" && typeof req.query.id !== "number") {
    throw new Error("Invalid parameter `id`.");
  }
  const foodId = BigInt(req.query.id);

  // Get quantityInCart;
  if (
    typeof req.query.quantityInCart !== "string" &&
    typeof req.query.quantityInCart !== "number"
  ) {
    throw new Error("Invalid parameter `num`.");
  }
  const quantityInCart = Math.floor(Number(req.query.quantityInCart));
  if (quantityInCart <= 0) {
    throw new Error("Parameter `quantityInCart` must greater than zero.");
  }

  // TODO: get user ID from context.
  if (
    typeof req.query.userId !== "string" &&
    typeof req.query.userId !== "number"
  ) {
    throw new Error("Invalid parameter `userId`.");
  }
  const userId = BigInt(req.query.userId);

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
      if (quantityInCart > stock) {
        throw new Error(
          `Didn't have enough stock of food <${foodId}> for your purchase.`
        );
      }

      // Cost the user balance to buy the food.
      const cost = food?.price.mul(quantityInCart).toNumber();
      const purchaser = await prisma.user.update({
        data: {
          balance: {
            decrement: cost,
          },
        },
        where: {
          id: parseInt(userId.toString(), 10),
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
            decrement: 1,
          },
        },
        where: {
          id: foodId,
        },
      });
      if (newFood.stock < 0) {
        throw new Error(`The food ${newFood.stock} is out of stock.`);
      }
      const ord = await prisma.order.findFirst({
        select: {
          orderNum: true,
        },
        orderBy: {
          id: "desc",
        },
      });
      const orderNum =
        ord != null ? ord.orderNum + getRandomInt(1, 10) + 1 : 10;

      // Generate a new order to record.
      const order = prisma.order.create({
        data: {
          userId: parseInt(userId.toString(), 10),
          foodId: foodId,
          quantity: quantityInCart,
          orderNum,
        },
      });

      return {
        userId: parseInt(userId.toString(), 10),
        foodId: foodId,
        foodTitle: food.title,
        cost: cost,
        remaining: purchaser.balance,
        orderId: order,
      };
    });
    return {
      status: 200,
      message: `User <${userId}> buy ${quantityInCart} foods <${foodId}> successfully, cost: ${result.cost}, remain: ${result.remaining} .`,
      data: result,
    };
  } catch (err: any) {
    console.error(err);
    return {
      status: 500,
      message: `Failed to buy food ${foodId} for user ${userId}: ${err.message}`,
    };
  }
}

export default buyFoodHandler;
