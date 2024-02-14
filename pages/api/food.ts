import { NextApiRequest, NextApiResponse } from "next";

import { FoodType } from "@prisma/client";
import prisma from "../../lib/prisma";
import { bigIntToSrt } from "helpers";

const DEFAULT_PAGE_NUM = 1;
const DEFAULT_PAGE_SIZE = 8;

enum SortType {
  PRICE = "price",
  PUBLISHED_AT = "createdAt",
}
enum SortOrder {
  ASC = "asc",
  DESC = "desc",
}
const sortTypes = Object.values(SortType);
const sortOrders = Object.values(SortOrder);
const FoodTypes = Object.keys(FoodType);

const foodListHandler = async (
  req: NextApiRequest,
  res: NextApiResponse<any>
) => {
  if (req.method === "GET") {
    try {
      const result = await getfoodList(req);
      const data = bigIntToSrt(result?.content || []);
      res.status(200).json(data);
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

async function getfoodList(req: NextApiRequest) {
  // Querying with joins (Many to many relation).
  const query = parsefoodListQuery(req.query, true, true);
  const foods: any[] = await prisma.food.findMany({
    ...query,
    include: {
      ages: {
        select: {
          age: {
            select: {
              id: true,
              name: true,
            },
          },
        },
      },
    },
  });
  const foodIds = foods.map((b) => b.id);

  // Grouping.
  //
  // Calculate the average rating score for the foods in the result.
  //
  // Notice: It is more suitable to add column named `average_rating` in foods table to store
  // the average rating score, which can avoid the need to query every time you use it, and
  // it is easier to implement the sorting feature.
  const foodAverageRatings = await prisma.rating.groupBy({
    by: ["foodId"],
    _avg: {
      score: true,
    },
    where: {
      foodId: {
        in: foodIds,
      },
    },
    // Why must set orderBy?
    orderBy: {
      _avg: {
        score: "asc",
      },
    },
  });
  for (const rating of foodAverageRatings) {
    const index = foods.findIndex((b) => b.id === rating.foodId);
    foods[index].averageRating = rating._avg.score;
  }

  const foodCountRatings = await prisma.rating.groupBy({
    by: ["foodId"],
    _count: {
      foodId: true,
    },
    where: {
      foodId: {
        in: foodIds,
      },
    },
    orderBy: {
      _count: {
        foodId: "asc",
      },
    },
  });
  for (const rating of foodCountRatings) {
    const index = foods.findIndex((b) => b.id === rating.foodId);
    foods[index].ratings = rating._count.foodId;
  }

  // Counting.
  const total = await prisma.food.count(parsefoodListQuery(req.query));
  if (foods)
    return {
      content: foods,
      total: total,
    };
}

function parsefoodListQuery(
  query: any,
  sorting: boolean = false,
  paging: boolean = false
) {
  const q: any = {};

  // Filtering.
  // Reference: https://www.prisma.io/docs/concepts/components/prisma-client/filtering-and-sorting
  q.where = {};
  if (typeof query.type === "string") {
    if (!FoodTypes.includes(query.type)) {
      throw new Error(
        `Parameter \`type\` must be one of [${FoodTypes.join(", ")}].`
      );
    }
    q.where.type = query.type;
  }

  // Sorting.
  if (sorting) {
    if (sortTypes.includes(query.sort)) {
      let order = SortOrder.ASC;
      if (sortOrders.includes(query.order)) {
        order = query.order;
      }

      if (query.sort === SortType.PRICE) {
        q.orderBy = {
          price: order,
        };
      } else if (query.sort === SortType.PUBLISHED_AT) {
        q.orderBy = {
          createdAt: order,
        };
      }
    }
  }

  // Paging.
  if (paging) {
    let page = DEFAULT_PAGE_NUM;
    let size = DEFAULT_PAGE_SIZE;
    if (typeof query.page === "string") {
      page = parseInt(query.page);
    }
    if (typeof query.size === "string") {
      size = parseInt(query.size);
    }
    if (size < 0 || size > 100) {
      throw new Error("Parameter `size` must between 0 and 100.");
    }
    q.take = size;
    q.skip = (page - 1) * size;
  }

  return q;
}

export default foodListHandler;
