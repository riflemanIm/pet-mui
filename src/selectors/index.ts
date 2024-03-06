import {
  atom,
  selector,
  selectorFamily,
  useRecoilState,
  useRecoilValue,
  waitForNone,
} from "recoil";
import { foodDetailsIdState, homePageQueryState } from "atoms";
import {
  fetchFoodDetailsById,
  fetchFoodRatingsById,
  fetchFoods,
} from "../actions/food";

export const homePageQuery = selector({
  key: "homePage",
  get: async ({ get }) => {
    const { page, size, type, ages, taste, sort } = get(homePageQueryState);
    const response = await fetchFoods({ page, size, type, ages, taste, sort });
    return response;
  },
});

export const foodInfoQuery = selector({
  key: "FoodInfoQuery",
  get: async ({ get }) => {
    const foodID = get(foodDetailsIdState);
    const response = await fetchFoodDetailsById(foodID);
    if (response.error) {
      throw response.error;
    }
    return response;
  },
});

export const foodRatingQuery = selector({
  key: "FoodRatingQuery",
  get: async ({ get }) => {
    const foodID = get(foodDetailsIdState);
    if (!foodID) {
      throw new Error("Required foodID");
    }
    const response = await fetchFoodRatingsById(foodID);
    if (response.error) {
      throw response.error;
    }
    return response;
  },
});
