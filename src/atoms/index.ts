import { atom } from "recoil";
import { syncEffect } from "recoil-sync";
import {
  ShoppingCartItemProps,
  PAGE_SIZE,
  FoodDicts,
  CurrentUserProps,
  FoodType,
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
    ingredient: [],
    hardness: [],
    packages: [],
    petSizes: [],
    specialNeeds: [],
  },
});

// Фильтры для главной: вернули 'type' (enum FoodType)
const viewChecker = object({
  page: optional(number()),
  type: optional(string()), // "Treat" | "Souvenirs" | "DryFood" (валидируем на уровне UI)
  ages: optional(string()),
  taste: optional(string()),
  designedFor: optional(string()),
  ingredient: optional(string()),
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
    type: "Treat" as FoodType, // дефолт как у тебя
    ages: "",
    taste: "",
    designedFor: "",
    ingredient: "",
    hardness: "",
    packages: "",
    petSizes: "",
    specialNeeds: "",
    sort: "",
    size: PAGE_SIZE,
  },
  effects: [syncEffect({ refine: viewChecker })],
});

// id теперь числовой
export const foodDetailsIdState = atom<number | null>({
  key: "foodDetailsIdState",
  default: null,
});

// юзер может быть не залогинен
export const currentUserState = atom<CurrentUserProps | undefined>({
  key: "currentUserState",
  default: undefined,
});

export const shoppingCartState = atom<ShoppingCartItemProps[]>({
  key: "shoppingCartState",
  default: [],
});
