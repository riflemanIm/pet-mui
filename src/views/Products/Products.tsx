// Products.tsx
import {
  Alert,
  Box,
  CircularProgress,
  Pagination,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import { fetchFoods } from "actions/food";
import { useAppState } from "context/AppStateContext";
import type { FoodType } from "types";
import ProductItem from "./ProductItem";

export default function Products() {
  const { homePageQuery, setHomePageQuery } = useAppState();
  const [status, setStatus] = useState<"success" | "loading" | "error">(
    "loading",
  );
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [items, setItems] = useState<any[]>([]);
  const [total, setTotal] = useState(0);
  const [pageSize, setPageSize] = useState(homePageQuery.size);

  const handlePageChange = useCallback(
    (_event: any, value: number) => {
      setHomePageQuery((prev) => ({ ...prev, page: value }));
    },
    [setHomePageQuery],
  );

  useEffect(() => {
    let cancelled = false;
    async function load() {
      setStatus("loading");
      setErrorMessage(null);
      const {
        page,
        size,
        type,
        ages,
        taste,
        designedFor,
        ingredient,
        hardness,
        packages,
        petSizes,
        specialNeeds,
        sort,
      } = homePageQuery;

      const safeSort =
        sort === "price" || sort === "publishedAt" || sort === "published_at"
          ? (sort as "price" | "publishedAt" | "published_at")
          : undefined;

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

      if (cancelled) return;

      if ((response as any).error) {
        setStatus("error");
        setErrorMessage("Ошибка загрузки товаров");
        return;
      }

      const { items, content, total, pageSize } = response as any;
      setItems(items ?? content ?? []);
      setTotal(total ?? 0);
      setPageSize(pageSize ?? size);
      setStatus("success");
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [homePageQuery]);

  const content = useMemo(() => {
    if (status === "loading") {
      return (
        <Box display="flex" justifyContent="center" p={4}>
          <CircularProgress />
        </Box>
      );
    }
    if (status === "error") {
      return <Alert severity="error">{errorMessage}</Alert>;
    }
    if (status === "success" && total === 0) {
      return (
        <Alert severity="info">По заданным фильтрам товаров не найдено</Alert>
      );
    }
    return (
      <>
        <Grid2 container spacing={3}>
          {items.map((food: any, idx: number) => (
            <ProductItem key={food.id} item={food} index={idx} />
          ))}

          {total > pageSize && (
            <Grid2 alignItems="flex-end" justifyItems="center" size={12}>
              <Pagination
                count={Math.ceil(total / pageSize)}
                page={homePageQuery.page}
                onChange={handlePageChange}
              />
            </Grid2>
          )}
          <Grid2 justifyItems="center" size={12}>
            <Typography variant="body2" color="secondary" align="center" mt={5}>
              {`${pageSize * (homePageQuery.page - 1) + 1}–${Math.min(
                pageSize * homePageQuery.page,
                total,
              )} из ${total} товаров`}
            </Typography>
          </Grid2>
        </Grid2>
      </>
    );
  }, [
    status,
    errorMessage,
    total,
    items,
    pageSize,
    homePageQuery.page,
    handlePageChange,
  ]);

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, sm: 6, md: 9 }} />
      {content}
    </Grid2>
  );
}
