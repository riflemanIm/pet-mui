import { atom } from "recoil";
import { syncEffect } from "recoil-sync";

import {
  ShoppingCartItemProps,
  PAGE_SIZE,
  FoodDicts,
  CurrentUserProps,
} from "../types";

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

export const foodDictsState = atom<FoodDicts>({
  key: "foodDictsState",
  default: {
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
});

const viewChecker = object({
  page: optional(number()),
  type: optional(string()),
  ages: optional(string()),
  taste: optional(string()),
  designedFor: optional(string()),
  ingridient: optional(string()),
  hardness: optional(string()),
  packages: optional(string()),
  petSizes: optional(string()),
  specialNeeds: optional(string()),
  sort: optional(string()),
  size: optional(number()),
});

type ViewState = CheckerReturnType<typeof viewChecker>;

export const homePageQueryState = atom<ViewState>({
  key: "homePageQueryState",
  default: {
    page: 1,
    type: "Treat",
    ages: "",
    taste: "",
    designedFor: "",
    ingridient: "",
    hardness: "",
    packages: "",
    petSizes: "",
    specialNeeds: "",
    sort: "",
    size: PAGE_SIZE,
  },
  effects: [syncEffect({ refine: viewChecker })],
});

export const foodDetailsIdState = atom({
  key: "foodDetailsIdState",
  default: "",
});

export const currentUserState = atom<CurrentUserProps>({
  key: "currentUserState",
  default: undefined,
});

export const shoppingCartState = atom<ShoppingCartItemProps[]>({
  key: "shoppingCartState",
  default: [],
});
