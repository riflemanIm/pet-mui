// Products.tsx
import {
  Alert,
  Button,
  Chip,
  Pagination,
  Paper,
  Stack,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useCallback, useEffect, useMemo } from "react";
import { useState } from "react";
import { fetchFoods } from "actions/food";
import { useAppState } from "context/AppStateContext";
import type { FoodType } from "types";
import ProductItem from "./ProductItem";
import ProductItemSkeleton from "./ProductItemSkeleton";
import ProductSort from "./ProductSort";

export default function Products() {
  const { homePageQuery, setHomePageQuery, foodDicts } = useAppState();
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

  const resetFilters = useCallback(() => {
    setHomePageQuery((prev) => ({
      ...prev,
      page: 1,
      type: "",
      ages: "",
      taste: "",
      designedFor: "",
      ingredient: "",
      hardness: "",
      packages: "",
      petSizes: "",
      specialNeeds: "",
    }));
  }, [setHomePageQuery]);

  const removeFilterValue = useCallback(
    (field: string, value?: string) => {
      setHomePageQuery((prev) => {
        if (!value) {
          return { ...prev, page: 1, [field]: "" };
        }

        const current = String((prev as any)[field] || "")
          .split(",")
          .filter(Boolean)
          .filter((v) => v !== value)
          .join(",");

        return { ...prev, page: 1, [field]: current };
      });
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

  const activeFilters = useMemo(() => {
    const labelByField: Record<string, string> = {
      type: "Категория",
      ingredient: "Ингредиент",
      designedFor: "Для",
      specialNeeds: "Особые потребности",
      petSizes: "Размер",
      taste: "Вкус",
      hardness: "Консистенция",
      ages: "Возраст",
      packages: "Упаковка",
    };

    const typeLabel: Record<string, string> = {
      Treat: "Лакомства",
      DryFood: "Сухой корм",
      Souvenirs: "Аксессуары",
    };

    const fields = Object.keys(labelByField);
    const chips: Array<{ key: string; label: string; field: string; value?: string }> = [];

    fields.forEach((field) => {
      const raw = String((homePageQuery as any)[field] || "");
      if (!raw) return;

      if (field === "type") {
        chips.push({
          key: `${field}-${raw}`,
          label: `${labelByField[field]}: ${typeLabel[raw] || raw}`,
          field,
        });
        return;
      }

      const values = raw.split(",").filter(Boolean);
      const dict = ((foodDicts as any)[field] || []) as Array<{
        id: number | string;
        name: string;
      }>;

      values.forEach((value) => {
        const found = dict.find((item) => String(item.id) === value);
        chips.push({
          key: `${field}-${value}`,
          label: `${labelByField[field]}: ${found?.name || value}`,
          field,
          value,
        });
      });
    });

    return chips;
  }, [homePageQuery, foodDicts]);

  const resultsText = useMemo(() => {
    if (status === "success") return `Найдено: ${total}`;
    if (status === "error") return "Не удалось загрузить товары";
    return "Загрузка товаров...";
  }, [status, total]);

  const content = useMemo(() => {
    if (status === "loading") {
      return (
        <Grid2 container spacing={3}>
          {Array.from({ length: 6 }).map((_, idx) => (
            <ProductItemSkeleton key={`product-skeleton-${idx}`} index={idx} />
          ))}
        </Grid2>
      );
    }
    if (status === "error") {
      return <Alert severity="error">{errorMessage}</Alert>;
    }
    if (status === "success" && total === 0) {
      return (
        <Paper
          variant="outlined"
          sx={{ borderRadius: 3, p: 3, textAlign: "center", mt: 2 }}
        >
          <Typography variant="h6" mb={1}>
            Ничего не найдено
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Попробуйте изменить параметры поиска или очистить фильтры.
          </Typography>
          <Button variant="contained" onClick={resetFilters}>
            Сбросить фильтры
          </Button>
        </Paper>
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
    resetFilters,
  ]);

  return (
    <>
      <Paper variant="outlined" sx={{ p: 2, borderRadius: 3, mb: 2 }}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          gap={2}
          flexWrap="wrap"
        >
          <Typography sx={{ fontWeight: 700 }}>{resultsText}</Typography>
          <ProductSort />
        </Stack>

        {activeFilters.length > 0 && (
          <Stack direction="row" gap={1} flexWrap="wrap" sx={{ mt: 1.5 }}>
            {activeFilters.map((filter) => (
              <Chip
                key={filter.key}
                size="small"
                label={filter.label}
                onDelete={() =>
                  removeFilterValue(filter.field, filter.value)
                }
              />
            ))}
            <Button size="small" color="inherit" onClick={resetFilters}>
              Сбросить
            </Button>
          </Stack>
        )}
      </Paper>
      {content}
    </>
  );
}
