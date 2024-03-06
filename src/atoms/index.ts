import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import {
  shoppingCartItemProps,
  FoodProps,
  PAGE_SIZE,
  FoodType,
  Age,
} from "types";

export const homePageFoodSumState = atom({
  key: "homePageFoodSumState",
  default: 0,
});

export const shoppingCartState = atom<shoppingCartItemProps[]>({
  key: "shoppingCartState",
  default: [],
});

export const foodTypeListState = atom<FoodType[]>({
  key: "foodTypeListState",
  default: [],
});
export const foodAgeListState = atom<Age[]>({
  key: "foodAgeListState",
  default: [],
});

export const homePageQueryState = atom({
  key: "homePageQueryState",
  default: { page: 1, type: "", ages: "", sort: "", size: PAGE_SIZE },
});

export const foodDetailsIdState = atom({
  key: "foodDetailsIdState",
  default: "",
});

export const currentUserIdState = atom({
  key: "currentUserIdState",
  default: "1",
});
