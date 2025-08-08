import axios from "axios";
import { getError } from "../helpers";
import {
  FoodProps,
  FoodDicts,
  FoodDetailProps,
  FoodRatingsProps,
  FoodType,
} from "../types";

type FoodListResponse<T = any> = {
  page: number;
  pageSize: number;
  total: number;
  items: T[];
};

type FetchFoodsParams = {
  page?: number;
  // prefer pageSize; size kept for backward compat
  pageSize?: number;
  size?: number;

  // enum from schema
  type?: FoodType;

  // 1->N (single id as number)
  tasteId?: number;
  ingredientId?: number;
  hardnessId?: number;

  // M:N (comma-separated ids as string)
  designedForIds?: string;
  ageIds?: string;
  typeTreatIds?: string;
  petSizeIds?: string;
  packageIds?: string;
  specialNeedsIds?: string;

  // legacy aliases still accepted by server
  ages?: string;
  taste?: string;
  designedFor?: string;
  ingredient?: string;
  hardness?: string;
  packages?: string;
  petSizes?: string;
  specialNeeds?: string;

  // sorting/search
  sort?: "publishedAt" | "price" | "published_at";
  order?: "asc" | "desc";
  q?: string;

  // price & flags (если понадобятся)
  minPrice?: number;
  maxPrice?: number;
  isPromo?: boolean;
  vat?: boolean;
};

export async function fetchFoods(
  data: FetchFoodsParams
): Promise<
  | (FoodListResponse<FoodProps> & { [x: string]: any })
  | { error: any; content: FoodProps[]; total: number }
> {
  try {
    const qp: Record<string, string> = {};
    const put = (k: string, v: any) => {
      if (v !== undefined && v !== null && String(v) !== "") qp[k] = String(v);
    };

    // pagination
    put("page", data.page);
    put("pageSize", data.pageSize ?? data.size);

    // enum type filter
    put("type", data.type);

    // search & sort
    put("q", data.q);
    put("sort", data.sort);
    put("order", data.order);

    // prices/flags (optional)
    put("minPrice", data.minPrice);
    put("maxPrice", data.maxPrice);
    put("isPromo", data.isPromo);
    put("vat", data.vat);

    // one-to-many (prefer numeric ids)
    put(
      "tasteId",
      data.tasteId ?? (data.taste ? Number(data.taste) : undefined)
    );
    put(
      "ingredientId",
      data.ingredientId ??
        (data.ingredient ? Number(data.ingredient) : undefined)
    );
    put(
      "hardnessId",
      data.hardnessId ?? (data.hardness ? Number(data.hardness) : undefined)
    );

    // many-to-many (prefer *Ids)
    put("designedForIds", data.designedForIds ?? data.designedFor);
    put("ageIds", data.ageIds ?? data.ages);
    put("typeTreatIds", data.typeTreatIds);
    put("petSizeIds", data.petSizeIds ?? data.petSizes);
    put("packageIds", data.packageIds ?? data.packages);
    put("specialNeedsIds", data.specialNeedsIds ?? data.specialNeeds);

    const query = new URLSearchParams(qp).toString();
    const url = `${process.env.NEXT_PUBLIC_API_URL}/food${
      query ? `?${query}` : ""
    }`;
    const res = await axios.get(url);

    if (res.status !== 200) {
      throw new Error(`${res.status} - ${res.data}`);
    }

    // Сервер возвращает { page, pageSize, total, items }
    const { page, pageSize, total, items } = res.data;
    return {
      page,
      pageSize,
      total,
      items: items as FoodProps[],
      content: items as FoodProps[], // back-compat если где-то ожидают content
    };
  } catch (error) {
    console.error(error);
    return { error, content: [], total: 0 };
  }
}

export async function fetchFoodDicts(): Promise<{
  content: FoodDicts;
  error?: any;
}> {
  try {
    const res = await axios.get<FoodDicts>(
      `${process.env.NEXT_PUBLIC_API_URL}/dicts`
    );
    if (res.status !== 200) throw new Error(`${res.status} - ${res.data}`);
    return { content: res.data };
  } catch (error) {
    console.error(error);
    return {
      error,
      content: {
        foodTypes: [],
        ages: [],
        taste: [],
        designedFor: [],
        ingredient: [],
        hardness: [],
        packages: [],
        petSizes: [],
        specialNeeds: [],
      },
    };
  }
}

export async function fetchFoodDetailsById(id: string): Promise<{
  content: FoodDetailProps;
  error?: any;
}> {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/food/${id}`
    );
    if (res.status !== 200) throw new Error(`${res.status} - ${res.data}`);
    return { content: res.data as FoodDetailProps };
  } catch (error) {
    return { error, content: {} as FoodDetailProps };
  }
}

export async function fetchFoodRatingsById(id: string): Promise<{
  content: { content: FoodRatingsProps[]; total: number };
  error?: any;
}> {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/foods/${id}/ratings`
    );
    if (res.status !== 200) throw new Error(`${res.status} - ${res.data}`);
    return { content: res.data };
  } catch (error) {
    console.error(error);
    return { error, content: { content: [], total: 0 } };
  }
}

export async function updateFoodDetails(
  id: string,
  params: Partial<FoodDetailProps>
): Promise<{
  content?: { data: FoodDetailProps; message: string };
  error?: any;
}> {
  try {
    const res = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/foods/${id}`,
      params
    );
    if (res.status !== 200) throw new Error(`${res.status} - ${res.data}`);
    return { content: res.data };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function addRatingByFoodID(
  foodID: string,
  params: { score: number }
): Promise<{
  content?: { data: Omit<FoodRatingsProps, "user">; message: string };
  error?: any;
}> {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/foods/${foodID}/ratings`,
      params
    );
    if (res.status !== 200) throw new Error(`${res.status} - ${res.data}`);
    return { content: res.data };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function deleteRating(
  foodID: string,
  userID: string
): Promise<{ content?: { message: string }; error?: any }> {
  try {
    const res = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/foods/${foodID}/ratings?userId=${userID}`
    );
    if (res.status !== 200) throw new Error(`${res.status} - ${res.data}`);
    return { content: res.data };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

// Покупка: теперь массив позиций { foodId, quantityInCart }
export async function buyFood(params: {
  token: string | undefined;
  data: { foodId: number; quantityInCart: number }[];
}): Promise<{ content?: { message: string }; error?: any }> {
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/buy`,
      params
    );
    if (res.status !== 200)
      throw new Error(`${res.status} - ${res.data.message}`);
    return { content: res.data };
  } catch (error) {
    console.error(error);
    return { error: getError(error) };
  }
}
