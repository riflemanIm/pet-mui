import { SetterOrUpdater, selector } from "recoil";
import { foodDetailsIdState, homePageQueryState } from "../atoms";
import {
  fetchFoodDetailsById,
  fetchFoodRatingsById,
  fetchFoods,
} from "../actions/food";
import { FoodProps, ShoppingCartItemProps, FoodType } from "../types";
import { EnqueueSnackbar } from "notistack";

// Главная: фильтры со схемой (enum type, остальное — строки ids через запятую)
// в селекторе homePageQuery

export const homePageQuery = selector({
  key: "homePage",
  get: async ({ get }) => {
    const {
      page,
      size,
      type, // <- FoodType | "" из atom'а
      ages,
      taste,
      designedFor,
      ingredient,
      hardness,
      packages,
      petSizes,
      specialNeeds,
      sort,
    } = get(homePageQueryState);
    const safeSort = (() => {
      switch (sort) {
        case "price":
        case "publishedAt":
        case "published_at":
          return sort as "price" | "publishedAt" | "published_at";
        default:
          return undefined;
      }
    })();
    const response = await fetchFoods({
      page,
      pageSize: size,
      sort: safeSort,
      ...(type ? { type: type as FoodType } : {}),
      ageIds: ages,
      designedForIds: designedFor,
      petSizeIds: petSizes,
      packageIds: packages,
      specialNeedsIds: specialNeeds,
      tasteId: taste ? Number(taste) : undefined,
      ingredientId: ingredient ? Number(ingredient) : undefined,
      hardnessId: hardness ? Number(hardness) : undefined,
    });

    return response;
  },
});

// Детали товара
export const foodInfoQuery = selector({
  key: "FoodInfoQuery",
  get: async ({ get }) => {
    const foodID = get(foodDetailsIdState); // number | null
    if (foodID == null) return;
    const response = await fetchFoodDetailsById(String(foodID));
    if (response.error) throw response.error;
    return response;
  },
});

// Рейтинг товара
export const foodRatingQuery = selector({
  key: "FoodRatingQuery",
  get: async ({ get }) => {
    const foodID = get(foodDetailsIdState);
    if (foodID == null) throw new Error("Required foodID");
    const response = await fetchFoodRatingsById(String(foodID));
    if (response.error) throw response.error;
    return response;
  },
});

// ---------- Корзина с учётом stock ----------
export const addItemShoppingCart = (
  setShoppingCart: SetterOrUpdater<ShoppingCartItemProps[]>,
  item: FoodProps,
  enqueueSnackbar: EnqueueSnackbar
) => {
  setShoppingCart((old) => {
    const existing = old.find((i) => i.id === item.id);
    if (existing) {
      if (existing.quantityInCart >= (item.stock ?? 0)) {
        enqueueSnackbar("Нет в наличии!", { variant: "error" });
        return [...old];
      }
      const updated = {
        ...existing,
        quantityInCart: existing.quantityInCart + 1,
      };
      enqueueSnackbar(`"${item.title}" добавлен в корзину`, {
        variant: "success",
      });
      const card = [...old.filter((i) => i.id !== item.id), updated];
      window.localStorage.setItem("card", JSON.stringify(card));
      return card;
    }
    if ((item.stock ?? 0) <= 0) {
      enqueueSnackbar("Нет в наличии!", { variant: "error" });
      return old;
    }
    enqueueSnackbar(`"${item.title}" добавлен в корзину.`, {
      variant: "success",
    });
    const card = [...old, { ...item, quantityInCart: 1 }];
    window.localStorage.setItem("card", JSON.stringify(card));
    return card;
  });
};

export const deleteItemShoppingCart = (
  setShoppingCart: SetterOrUpdater<ShoppingCartItemProps[]>,
  id: number
) => {
  setShoppingCart((old) => {
    const card = old.filter((i) => i.id !== id);
    window.localStorage.setItem("card", JSON.stringify(card));
    return card;
  });
};

export const itemShoppingCartAddQty = (
  setShoppingCart: SetterOrUpdater<ShoppingCartItemProps[]>,
  id: number,
  quantityInCart: number
) => {
  setShoppingCart((old) => {
    const card = old.map((it) =>
      it.id === id
        ? {
            ...it,
            quantityInCart: Math.min(it.stock ?? 0, quantityInCart + 1), // не превышаем stock
          }
        : it
    );
    window.localStorage.setItem("card", JSON.stringify(card));
    return card;
  });
};

export const itemShoppingCartRemoveQty = (
  setShoppingCart: SetterOrUpdater<ShoppingCartItemProps[]>,
  id: number,
  quantityInCart: number
) => {
  setShoppingCart((old) => {
    const card = old.reduce<ShoppingCartItemProps[]>((acc, it) => {
      if (it.id === id) {
        const nextQty = quantityInCart - 1;
        if (nextQty > 0) acc.push({ ...it, quantityInCart: nextQty });
      } else {
        acc.push(it);
      }
      return acc;
    }, []);
    window.localStorage.setItem("card", JSON.stringify(card));
    return card;
  });
};
