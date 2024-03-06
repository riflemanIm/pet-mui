import { atom } from "recoil";

import { shoppingCartItemProps, PAGE_SIZE, FoodDicts } from "types";

export const homePageFoodSumState = atom({
  key: "homePageFoodSumState",
  default: 0,
});

export const shoppingCartState = atom<shoppingCartItemProps[]>({
  key: "shoppingCartState",
  default: [],
});

export const foodDictsState = atom<FoodDicts>({
  key: "foodDictsState",
  default: { foodTypes: [], ages: [], taste: [] },
});

export const homePageQueryState = atom({
  key: "homePageQueryState",
  default: {
    page: 1,
    type: "",
    ages: "",
    taste: "",
    sort: "",
    size: PAGE_SIZE,
  },
});

export const foodDetailsIdState = atom({
  key: "foodDetailsIdState",
  default: "",
});

export const currentUserIdState = atom({
  key: "currentUserIdState",
  default: "1",
});
