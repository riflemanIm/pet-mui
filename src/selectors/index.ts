import {
  SetterOrUpdater,
  selector,
  // atom,
  // selectorFamily,
  // useRecoilCallback,
  // useRecoilState,
  // useRecoilValue,
  // waitForNone,
} from "recoil";
import {
  foodDetailsIdState,
  homePageQueryState,
  // currentUserState,
  // shoppingCartState,
} from "atoms";
import {
  fetchFoodDetailsById,
  fetchFoodRatingsById,
  fetchFoods,
} from "../actions/food";
import { FoodProps, ShoppingCartItemProps } from "types";
import { EnqueueSnackbar } from "notistack";

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
    //console.log("---foodID---", foodID, typeof foodID);
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

export const addItemShoppingCart = (
  setShoppingCart: SetterOrUpdater<ShoppingCartItemProps[]>,
  item: FoodProps,
  enqueueSnackbar: EnqueueSnackbar
) => {
  setShoppingCart((oldShoppingCart) => {
    const existingItem = oldShoppingCart.find((i) => i.id === item.id);
    if (existingItem) {
      if (existingItem.quantity >= item.stock) {
        enqueueSnackbar(`Out of stock!`, { variant: "error" });
        return [...oldShoppingCart];
      }
      const newItem = {
        ...existingItem,
        quantity: existingItem.quantity + 1,
      };
      enqueueSnackbar(`"${item.title}" was successfully added.`, {
        variant: "success",
      });
      return [...oldShoppingCart.filter((i) => i.id !== item.id), newItem];
    }
    enqueueSnackbar(`"${item.title}" was successfully added.`, {
      variant: "success",
    });
    const card = [
      ...oldShoppingCart,
      {
        ...item,
        quantity: 1,
      },
    ];
    window.localStorage.setItem("card", JSON.stringify(card));
    return card;
  });
};

export const deleteItemShoppingCart = (
  setShoppingCart: SetterOrUpdater<ShoppingCartItemProps[]>,
  id: string
) => {
  setShoppingCart((oldShoppingCart) => {
    return [...oldShoppingCart.filter((i) => i.id !== id)];
  });
};

export const ItemShoppingCartAddQty = (
  setShoppingCart: SetterOrUpdater<ShoppingCartItemProps[]>,
  id: string,
  quantity: number
) => {
  setShoppingCart((oldShoppingCart) => {
    return oldShoppingCart.reduce<ShoppingCartItemProps[]>((prev, item) => {
      if (item.id === id) {
        prev.push({
          ...item,
          quantity: quantity + 1,
        });
      } else {
        prev.push(item);
      }
      return prev;
    }, []);
  });
};

export const ItemShoppingCartRemoveQty = (
  setShoppingCart: SetterOrUpdater<ShoppingCartItemProps[]>,
  id: string,
  quantity: number
) => {
  setShoppingCart((oldShoppingCart) => {
    return oldShoppingCart.reduce<ShoppingCartItemProps[]>((prev, item) => {
      if (item.id === id) {
        prev.push({
          ...item,
          quantity: quantity - 1,
        });
      } else {
        prev.push(item);
      }
      return prev;
    }, []);
  });
};
