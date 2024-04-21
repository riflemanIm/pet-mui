import {
  atom,
  selector,
  selectorFamily,
  useRecoilState,
  useRecoilValue,
  waitForNone,
} from "recoil";
import {
  currentUserState,
  foodDetailsIdState,
  homePageQueryState,
} from "atoms";
import {
  fetchFoodDetailsById,
  fetchFoodRatingsById,
  fetchFoods,
} from "../actions/food";

import { signup } from "actions/user";

export const homePageQuery = selector({
  key: "homePage",
  get: async ({ get }) => {
    const {
      page,
      size,
      type,
      ages,
      taste,
      designedFor,
      ingridient,
      hardness,
      packages,
      petSizes,
      specialNeeds,
      sort,
    } = get(homePageQueryState);
    const response = await fetchFoods({
      page,
      size,
      type,
      ages,
      taste,
      designedFor,
      ingridient,
      hardness,
      packages,
      petSizes,
      specialNeeds,
      sort,
    });
    return response;
  },
});

export const foodInfoQuery = selector({
  key: "FoodInfoQuery",
  get: async ({ get }) => {
    const foodID = get(foodDetailsIdState);
    console.log("---foodID---", foodID, typeof foodID);
    if (foodID) {
      const response = await fetchFoodDetailsById(foodID);
      if (response.error) {
        throw response.error;
      }
      return response;
    }
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

export const currentUserQuery = selector({
  key: "currentUserQuery",
  get: async ({ get }) => {
    const user = get(currentUserState);
    console.log("---user---", user);
    if (user.email) {
      const response = await signup(user);
      if (response.error) {
        throw response.error;
      }
      return response;
    }
  },
});
