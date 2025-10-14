import { NextApiRequest, NextApiResponse } from "next";
import { JwtPayload, verify } from "jsonwebtoken";
import prisma from "../../lib/prisma";
import SENDMAIL, { HTML_TEMPLATE } from "../../lib/mail";

import isEmpty, { getError, getRandomInt } from "helpers";
import {
  calcCartItemTotalPrice,
  currencyFormat,
} from "helpers/utils";
import { Decimal } from "@prisma/client/runtime/library";
type DataType = {
  foodId: number;
  quantityInCart: number;
  price: string;
};
type DataTypeChecked = {
  foodId: bigint;
  quantityInCart: number;
  price: string;
};

type ResultType = {
  artikul: string;
  userId: number;
  foodId: number;
  foodTitle: string;
  quantityInCart: number;
  orderNum: number;
  price: Decimal;
};

const buyFoodHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  const token = req.body.token;
  //console.log("token", token);
  if (isEmpty(token)) {
    res.status(401).json({ message: "A token is required for authentication" });
  }
  try {
    const tokenKey = process.env.TOKEN_KEY as string;
    const decoded = verify(token, tokenKey) as JwtPayload;
    if (isEmpty(decoded)) {
      throw new Error("Invalid Token");
    }
    //console.log("decoded", decoded);
    if (req.method !== "POST") {
      throw new Error(`HTTP method ${req.method} is not supported.`);
    }
    try {
      const userId = decoded.id;

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

        // Check quantityInCart;
        if (
          typeof item.quantityInCart !== "string" &&
          typeof item.quantityInCart !== "number"
        ) {
          throw new Error("Invalid parameter `quantityInCart`.");
        }
        if (item.quantityInCart <= 0) {
          throw new Error("Parameter `quantityInCart` must greater than zero.");
        }

        const quantityInCart = item.quantityInCart;

        return { foodId, quantityInCart, price: item.price };
      });

      const result = await buyFood(data, userId);

      res.status(result.status).json(result);
      if (!isEmpty(result.result)) {
        /** --------- send mail -------------- */
        const to = decoded.email;
        const toName = decoded.name;

        const from = process.env.SITE_EMAIL;
        const fromName = process.env.SITE_EMAIL_NAME;

        let orderTable = `<h3>Ваш заказ принят</h3><p>Номер заказа: <strong>#${
          result.result[0].orderNum || ""
        }</strong></p>
      <table border="1" cellpadding="3" cellspacing="0" style="border-style:solid; border-width:1px; border-color:#000000;">`;
        orderTable +=
          "<tr><th>артикул</th> <th>название</th> <th>кол-во</th> <th>цена</th></tr>";
        result.result.forEach((item: ResultType) => {
          orderTable += "<tr>";
          orderTable += `<td>${item.artikul}</td>`;
          orderTable += `<td>${item.foodTitle}</td>`;
          orderTable += `<td align="right">${item.quantityInCart}</td>`;
          orderTable += `<td align="right">${currencyFormat(item.price)}₽</td>`;
          orderTable += "</tr>";
        });
        orderTable += `<tr> <td colspan="3"></td> <td align="right">${currencyFormat(
          calcCartItemTotalPrice(result.result)
        )}₽</td></tr></table>`;

        const options = {
          from: `"${fromName}" <${from}>`, // sender address
          to: `${toName} <${to}>`, // receiver email
          subject: `Ваш заказ принят. Shepherd`, // Subject line
          text: "",
          html: HTML_TEMPLATE(orderTable),
        };

        SENDMAIL(options, (info: string, error: any) => {
          if (info != null) {
            console.log("Email sent successfully");
            // console.log("info: ", info);
            res.status(200).json({ sent: "ok", info });
          } else if (error != null) {
            throw new Error("Error send mail");
          }
        });
      }
    } catch (err: any) {
      console.error(err);
      res.status(500).json({
        message: err.message,
      });
    }
  } catch (err: any) {
    res.status(500).json({
      message: err.message,
    });
  }
};

async function buyFood(data: DataTypeChecked[], userId: number): Promise<any> {
  try {
    let result = [] as ResultType[];

    await prisma.$transaction(async (tr) => {
      // Found the food that the user want to purchase.
      const ord = await tr.order.findFirst({
        select: {
          orderNum: true,
        },
        orderBy: {
          id: "desc",
        },
        take: 1,
      });
      const orderNum =
        ord != null ? ord.orderNum + getRandomInt(1, 10) + 1 : 10;

      //console.log("orderNum", orderNum);
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
        //console.log("-- quantityInCart", item.quantityInCart, "stock", stock, "\n");
        if (item.quantityInCart > stock) {
          throw new Error(`"${food.title}" -  нет нужного количества`);
        }

        // Cost the user balance to buy the food.
        // const cost = food?.price.mul(item.quantityInCart).toNumber();

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
              decrement: item.quantityInCart,
            },
          },
          where: {
            id: item.foodId,
          },
        });
        if (newFood.stock < 0) {
          throw new Error(`"${newFood.title}" нет в наличии`);
        }

        // Generate a new order to record.

        await tr.order.create({
          data: {
            userId,
            foodId: item.foodId,
            quantity: item.quantityInCart,
            orderNum,
          },
        });

        result.push({
          userId,
          artikul: food.artikul,
          foodId: Number(item.foodId),
          foodTitle: food.title,
          quantityInCart: item.quantityInCart,
          price: food.price,
          orderNum,
          //cost,
          //remaining: purchaser.balance,
        });
      }
    });
    return {
      status: 200,
      message: "Ваш заказ успешно оформлен",
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
