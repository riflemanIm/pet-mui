import { atom, selector, useRecoilState, useRecoilValue } from "recoil";

import { shoppingCartItemProps, FoodProps, PAGE_SIZE } from "types";

export const homePageFoodSumState = atom({
  key: "homePageFoodSumState",
  default: 0,
});

export const shoppingCartState = atom<shoppingCartItemProps[]>({
  key: "shoppingCartState",
  default: [],
});

export const foodTypeListState = atom<string[]>({
  key: "foodTypeListState",
  default: [],
});

export const homePageQueryState = atom({
  key: "homePageQueryState",
  default: { page: 1, type: "", sort: "", size: PAGE_SIZE },
});

export const foodDetailsIdState = atom({
  key: "foodDetailsIdState",
  default: "",
});

export const currentUserIdState = atom({
  key: "currentUserIdState",
  default: "1",
});
