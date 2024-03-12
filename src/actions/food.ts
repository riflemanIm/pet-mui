import axios from "axios";
import { FoodProps, FoodDicts, FoodDetailProps, FoodRatingsProps } from "types";

export async function fetchFoods(data: {
  page?: number;
  size?: number;
  type?: string;
  ages?: string;
  taste?: string;
  designedFor?: string;
  ingridient?: string;
  hardness?: string;
  packages?: string;
  petSizes?: string;
  specialNeeds?: string;
  sort?: string;
}): Promise<{
  [x: string]: any;
  content: FoodProps[];
  total: number;
  error?: any;
}> {
  try {
    const queryArray = Object.keys(data).reduce((prev: string[], item) => {
      const value = data[item as keyof typeof data];
      if (value) {
        prev.push(`${item}=${value}`);
      }
      return prev;
    }, []);
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/food?${queryArray.join(`&`)}`
    );
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    return response.data;
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
    const response = await axios.get<FoodDicts>(
      `${process.env.NEXT_PUBLIC_API_URL}/dicts`
    );
    //console.log("response.data", response.data);
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    return { content: response.data };
  } catch (error) {
    console.error(error);
    return {
      error,
      content: {
        foodTypes: [],
        ages: [],
        taste: [],
        designedFor: [],
        ingridient: [],
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
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/foods/${id}`
    );
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    return { content: response.data as FoodDetailProps };
  } catch (error) {
    console.error(error);
    return { error, content: {} as FoodDetailProps };
  }
}

export async function fetchFoodRatingsById(id: string): Promise<{
  content: { content: FoodRatingsProps[]; total: number };
  error?: any;
}> {
  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/foods/${id}/ratings`
    );
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    return { content: response.data };
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
    const response = await axios.put(
      `${process.env.NEXT_PUBLIC_API_URL}/foods/${id}`,
      params
    );
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    return { content: response.data };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function addRatingByFoodID(
  foodID: string,
  params: {
    score: number;
  }
): Promise<{
  content?: { data: Omit<FoodRatingsProps, "user">; message: string };
  error?: any;
}> {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/foods/${foodID}/ratings`,
      params
    );
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    return { content: response.data };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function deleteRating(
  foodID: string,
  userID: string
): Promise<{
  content?: { message: string };
  error?: any;
}> {
  try {
    const response = await axios.delete(
      `${process.env.NEXT_PUBLIC_API_URL}/foods/${foodID}/ratings?userId=${userID}`
    );
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    return { content: response.data };
  } catch (error) {
    console.error(error);
    return { error };
  }
}

export async function buyFood(
  foodID: string,
  params: { userID: string; quality: number }
): Promise<{
  content?: { message: string };
  error?: any;
}> {
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/foods/${foodID}/buy?userId=${params.userID}&quality=${params.quality}`
    );
    if (response.status !== 200) {
      throw new Error(`${response.status} - ${response.data}`);
    }
    return { content: response.data };
  } catch (error) {
    console.error(error);
    return { error };
  }
}
