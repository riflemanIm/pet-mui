import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import type { ReactNode } from "react";
import { useRouter } from "next/router";
import type {
  CurrentUserProps,
  FoodDicts,
  FoodProps,
  ShoppingCartItemProps,
} from "types";
import type { VariantType } from "notistack";

type HomePageQueryState = {
  page: number;
  type?: string;
  ages: string;
  taste: string;
  designedFor: string;
  ingredient: string;
  hardness: string;
  packages: string;
  petSizes: string;
  specialNeeds: string;
  sort: string;
  size: number;
};

type SnackbarCb = (
  message: string,
  options?: { variant: VariantType }
) => void;

type SnackbarPayload = { message: string; variant: VariantType };

type AppStateContextValue = {
  homePageQuery: HomePageQueryState;
  setHomePageQuery: React.Dispatch<
    React.SetStateAction<HomePageQueryState>
  >;
  foodDicts: FoodDicts;
  setFoodDicts: React.Dispatch<React.SetStateAction<FoodDicts>>;
  foodDetailsId: number | string | null;
  setFoodDetailsId: (id: number | string | null) => void;
  currentUser: CurrentUserProps | null;
  setCurrentUser: (user: CurrentUserProps | null) => void;
  shoppingCart: ShoppingCartItemProps[];
  addCartItem: (item: FoodProps, notify?: SnackbarCb) => void;
  removeCartItem: (id: number | string) => void;
  incrementCartItem: (id: number | string) => void;
  decrementCartItem: (id: number | string) => void;
  clearCart: () => void;
};

const defaultFoodDicts: FoodDicts = {
  foodTypes: [],
  ages: [],
  taste: [],
  designedFor: [],
  ingredient: [],
  hardness: [],
  packages: [],
  petSizes: [],
  specialNeeds: [],
};

const defaultHomePageQuery: HomePageQueryState = {
  page: 1,
  type: "Treat",
  ages: "",
  taste: "",
  designedFor: "",
  ingredient: "",
  hardness: "",
  packages: "",
  petSizes: "",
  specialNeeds: "",
  sort: "",
  size: 12,
};

const HOME_QUERY_STRING_FIELDS: Array<
  Exclude<keyof HomePageQueryState, "page" | "size">
> = [
  "type",
  "ages",
  "taste",
  "designedFor",
  "ingredient",
  "hardness",
  "packages",
  "petSizes",
  "specialNeeds",
  "sort",
];

const HOME_QUERY_PARAM_NAMES = [
  "page",
  "size",
  "type",
  "ages",
  "taste",
  "designedFor",
  "ingredient",
  "hardness",
  "packages",
  "petSizes",
  "specialNeeds",
  "sort",
] as const;

const HOME_QUERY_PARAM_SET = new Set<string>([
  ...HOME_QUERY_PARAM_NAMES,
  "homePageQueryState",
]);

const AppStateContext = createContext<AppStateContextValue | undefined>(
  undefined
);

function homeQueryStatesEqual(
  a: HomePageQueryState,
  b: HomePageQueryState
) {
  return (
    a.page === b.page &&
    a.size === b.size &&
    HOME_QUERY_STRING_FIELDS.every((field) => a[field] === b[field])
  );
}

function parseHomePageQueryState({
  searchString,
  legacyParam,
}: {
  searchString: string;
  legacyParam?: string | string[];
}): HomePageQueryState {
  const params = new URLSearchParams(searchString);
  const hasModernParam = HOME_QUERY_PARAM_NAMES.some((key) =>
    params.has(key)
  );

  if (!hasModernParam && legacyParam) {
    const legacyValue = Array.isArray(legacyParam)
      ? legacyParam[0]
      : legacyParam;
    if (legacyValue) {
      try {
        const parsed = JSON.parse(legacyValue);
        return {
          ...defaultHomePageQuery,
          ...parsed,
        };
      } catch {
        // ignore malformed legacy payload
      }
    }
  }

  const next: HomePageQueryState = { ...defaultHomePageQuery };

  const pageParam = params.get("page");
  if (pageParam) {
    const value = Number(pageParam);
    if (Number.isFinite(value) && value > 0) {
      next.page = Math.floor(value);
    }
  }

  const sizeParam = params.get("size");
  if (sizeParam) {
    const value = Number(sizeParam);
    if (Number.isFinite(value) && value > 0) {
      next.size = Math.floor(value);
    }
  }

  HOME_QUERY_STRING_FIELDS.forEach((field) => {
    if (field === "type") {
      const typeValue = params.get("type");
      if (typeValue) {
        next.type = typeValue;
      } else if (typeValue === "") {
        next.type = "";
      }
      return;
    }
    const value = params.get(field);
    next[field] = value ?? "";
  });

  return next;
}

function buildHomeQuerySearchParams(
  state: HomePageQueryState
): URLSearchParams {
  const params = new URLSearchParams();

  if (state.page > 1) {
    params.set("page", String(state.page));
  }
  if (state.size !== defaultHomePageQuery.size) {
    params.set("size", String(state.size));
  }
  if (state.type) {
    params.set("type", state.type);
  }
  HOME_QUERY_STRING_FIELDS.forEach((field) => {
    if (field === "type") return;
    const value = state[field];
    if (typeof value === "string" && value.trim() !== "") {
      params.set(field, value);
    }
  });

  return params;
}

function paramsFromQuery(
  query: Record<string, string | string[] | undefined>
) {
  const params = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value == null) return;
    if (Array.isArray(value)) {
      value.forEach((v) => {
        if (v != null) params.append(key, String(v));
      });
      return;
    }
    params.append(key, String(value));
  });
  return params;
}


function readCartFromStorage(): ShoppingCartItemProps[] {
  if (typeof window === "undefined") return [];
  try {
    const raw = window.localStorage.getItem("card");
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeCartToStorage(cart: ShoppingCartItemProps[]) {
  if (typeof window === "undefined") return;
  if (!cart.length) {
    window.localStorage.removeItem("card");
    return;
  }
  window.localStorage.setItem("card", JSON.stringify(cart));
}

function readUserFromStorage(): CurrentUserProps | null {
  if (typeof window === "undefined") return null;
  try {
    const raw = window.localStorage.getItem("user");
    if (!raw) return null;
    return JSON.parse(raw) as CurrentUserProps;
  } catch {
    return null;
  }
}

function writeUserToStorage(user: CurrentUserProps | null) {
  if (typeof window === "undefined") return;
  if (!user) {
    window.localStorage.removeItem("user");
    return;
  }
  window.localStorage.setItem("user", JSON.stringify(user));
}

export function AppStateProvider({ children }: { children: ReactNode }) {
  const router = useRouter();
  const [homePageQuery, setHomePageQuery] =
    useState<HomePageQueryState>(defaultHomePageQuery);
  const initializedQueryRef = useRef(false);
  const [foodDicts, setFoodDicts] =
    useState<FoodDicts>(defaultFoodDicts);
  const [foodDetailsId, setFoodDetailsIdState] = useState<
    number | string | null
  >(null);
  const [currentUser, setCurrentUserState] = useState<CurrentUserProps | null>(
    null
  );
  const [shoppingCart, setShoppingCart] = useState<ShoppingCartItemProps[]>(
    []
  );

  const latestHomePageQueryRef = useRef<HomePageQueryState>(defaultHomePageQuery);

  useEffect(() => {
    latestHomePageQueryRef.current = homePageQuery;
  }, [homePageQuery]);

  useEffect(() => {
    setShoppingCart(readCartFromStorage());
    setCurrentUserState(readUserFromStorage());
  }, []);

  useEffect(() => {
    if (!router.isReady) return;
    if (!router.asPath.startsWith('/catalog')) return;
    const searchPart = router.asPath.includes('?')
      ? router.asPath.slice(router.asPath.indexOf('?') + 1).split('#')[0]
      : '';
    const nextState = parseHomePageQueryState({
      searchString: searchPart,
      legacyParam: router.query.homePageQueryState,
    });
    const currentState = latestHomePageQueryRef.current;
    if (!initializedQueryRef.current || !homeQueryStatesEqual(currentState, nextState)) {
      initializedQueryRef.current = true;
      setHomePageQuery(nextState);
    }
  }, [router.isReady, router.asPath, router.query.homePageQueryState]);

  useEffect(() => {
    if (!router.isReady || router.pathname !== '/catalog') return;
    if (!initializedQueryRef.current) return;

    const currentParams = paramsFromQuery(router.query as Record<string, string | string[] | undefined>);
    const cleanedParams = new URLSearchParams();
    currentParams.forEach((value, key) => {
      if (!HOME_QUERY_PARAM_SET.has(key)) {
        cleanedParams.append(key, value);
      }
    });

    const targetParams = buildHomeQuerySearchParams(homePageQuery);
    targetParams.forEach((value, key) => {
      cleanedParams.set(key, value);
    });

    const currentQueryString = currentParams.toString();
    const nextQueryString = cleanedParams.toString();
    if (currentQueryString === nextQueryString) {
      return;
    }

    const nextQuery: Record<string, string> = {};
    cleanedParams.forEach((value, key) => {
      nextQuery[key] = value;
    });

    router.replace(
      { pathname: router.pathname, query: nextQuery },
      undefined,
      { shallow: true }
    );
  }, [homePageQuery, router]);

  const updateCart = useCallback(
    (updater: (items: ShoppingCartItemProps[]) => ShoppingCartItemProps[]) => {
      setShoppingCart((prev) => {
        const next = updater(prev);
        writeCartToStorage(next);
        return next;
      });
    },
    []
  );

  const addCartItem = useCallback(
    (item: FoodProps, notify?: SnackbarCb) => {
      let snackbar: SnackbarPayload | null = null;
      updateCart((prev) => {
        const existing = prev.find((cartItem) => cartItem.id === item.id);
        const stock = item.stock ?? 0;
        if (existing) {
          if (existing.quantityInCart >= stock) {
            snackbar = { message: "Нет в наличии!", variant: "error" };
            return prev;
          }
          const updated = {
            ...existing,
            quantityInCart: existing.quantityInCart + 1,
          };
          snackbar = {
            message: `"${item.title}" добавлен в корзину`,
            variant: "success",
          };
          return [
            ...prev.filter((cartItem) => cartItem.id !== item.id),
            updated,
          ];
        }
        if (stock <= 0) {
          snackbar = { message: "Нет в наличии!", variant: "error" };
          return prev;
        }
        snackbar = {
          message: `"${item.title}" добавлен в корзину.`,
          variant: "success",
        };
        return [...prev, { ...item, quantityInCart: 1 }];
      });
      if (snackbar && notify) {
        const { message, variant } = snackbar;
        notify(message, { variant });
      }
    },
    [updateCart]
  );

  const removeCartItem = useCallback(
    (id: number | string) => {
      const numericId = typeof id === "string" ? Number(id) : id;
      updateCart((prev) =>
        prev.filter((item) => item.id !== numericId)
      );
    },
    [updateCart]
  );

  const incrementCartItem = useCallback(
    (id: number | string) => {
      const numericId = typeof id === "string" ? Number(id) : id;
      updateCart((prev) =>
        prev.map((item) => {
          if (item.id !== numericId) return item;
          const stock = item.stock ?? 0;
          const nextQty = Math.min(stock, item.quantityInCart + 1);
          return nextQty === item.quantityInCart
            ? item
            : { ...item, quantityInCart: nextQty };
        })
      );
    },
    [updateCart]
  );

  const decrementCartItem = useCallback(
    (id: number | string) => {
      const numericId = typeof id === "string" ? Number(id) : id;
      updateCart((prev) =>
        prev.reduce<ShoppingCartItemProps[]>((acc, item) => {
          if (item.id !== numericId) {
            acc.push(item);
            return acc;
          }
          const nextQty = item.quantityInCart - 1;
          if (nextQty > 0) {
            acc.push({ ...item, quantityInCart: nextQty });
          }
          return acc;
        }, [])
      );
    },
    [updateCart]
  );

  const clearCart = useCallback(() => {
    setShoppingCart([]);
    writeCartToStorage([]);
  }, []);

  const setCurrentUser = useCallback((user: CurrentUserProps | null) => {
    setCurrentUserState(user);
    writeUserToStorage(user);
  }, []);

  const setFoodDetailsId = useCallback(
    (id: number | string | null) => {
      setFoodDetailsIdState(id);
    },
    []
  );

  const value = useMemo<AppStateContextValue>(
    () => ({
      homePageQuery,
      setHomePageQuery,
      foodDicts,
      setFoodDicts,
      foodDetailsId,
      setFoodDetailsId,
      currentUser,
      setCurrentUser,
      shoppingCart,
      addCartItem,
      removeCartItem,
      incrementCartItem,
      decrementCartItem,
      clearCart,
    }),
    [
      homePageQuery,
      foodDicts,
      foodDetailsId,
      currentUser,
      shoppingCart,
      setFoodDetailsId,
      setCurrentUser,
      addCartItem,
      removeCartItem,
      incrementCartItem,
      decrementCartItem,
      clearCart,
    ]
  );

  return (
    <AppStateContext.Provider value={value}>
      {children}
    </AppStateContext.Provider>
  );
}

export function useAppState() {
  const context = useContext(AppStateContext);
  if (!context) {
    throw new Error("useAppState must be used within AppStateProvider");
  }
  return context;
}
