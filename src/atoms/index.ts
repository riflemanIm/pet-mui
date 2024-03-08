import { atom } from "recoil";
import { syncEffect } from "recoil-sync";

import { shoppingCartItemProps, PAGE_SIZE, FoodDicts } from "types";
import {
  CheckerReturnType,
  number,
  string,
  object,
  optional,
} from "@recoiljs/refine";

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
  default: {
    foodTypes: [],
    ages: [],
    taste: [],
    designedFor: [],
    packages: [],
  },
});

const viewChecker = object({
  page: optional(number()),
  type: optional(string()),
  ages: optional(string()),
  taste: optional(string()),
  designedFor: optional(string()),
  packages: optional(string()),
  sort: optional(string()),
  size: optional(number()),
});

type ViewState = CheckerReturnType<typeof viewChecker>;

export const homePageQueryState = atom<ViewState>({
  key: "homePageQueryState",
  default: {
    page: 1,
    type: "",
    ages: "",
    taste: "",
    designedFor: "",
    packages: "",
    sort: "",
    size: PAGE_SIZE,
  },
  effects: [syncEffect({ refine: viewChecker })],
});

export const foodDetailsIdState = atom({
  key: "foodDetailsIdState",
  default: "",
});

export const currentUserIdState = atom({
  key: "currentUserIdState",
  default: "1",
});
