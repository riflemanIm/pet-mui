import React, { useState, useCallback, useEffect, useMemo } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import {
  Alert,
  Pagination,
  Stack,
  Box,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { homePageFoodSumState, homePageQueryState } from "atoms";
import { homePageQuery } from "selectors";
import { FoodProps, PAGE_SIZE } from "types";
import ProductFilter from "./ProductFilter";
import ProductFilterSidebar from "./ProductFilterSidebar";
import ProductItem from "./ProductItem";
import ProductSort from "./ProductSort";

export default function Products() {
  const theme = useTheme();
  const foodListLoadable = useRecoilValueLoadable(homePageQuery);
  const [totalItems, setTotalItems] = useRecoilState(homePageFoodSumState);
  const [queryData, setQueryData] = useRecoilState(homePageQueryState);
  const [openFiltersBar, setOpenFiltersBar] = useState(false);

  const page = queryData?.page ?? 1;

  const handlePageChange = useCallback(
    (event: React.ChangeEvent<unknown>, value: number) => {
      setQueryData((prev) => ({ ...prev, page: value }));
    },
    [setQueryData]
  );

  const handleToggleFilters = useCallback(() => {
    setOpenFiltersBar((prev) => !prev);
  }, []);

  useEffect(() => {
    if (foodListLoadable.state === "hasValue") {
      setTotalItems(foodListLoadable.contents.total);
    }
  }, [foodListLoadable.state, foodListLoadable.contents, setTotalItems]);

  const content = useMemo(() => {
    switch (foodListLoadable.state) {
      case "loading":
        return (
          <Box display="flex" justifyContent="center" p={4}>
            <CircularProgress />
          </Box>
        );
      case "hasError":
        return <Alert severity="error">Ошибка загрузки товаров</Alert>;
      case "hasValue": {
        const { content: items, total } = foodListLoadable.contents;
        if (total === 0) {
          return (
            <Alert severity="info">
              По заданным фильтрам товаров не найдено
            </Alert>
          );
        }
        return (
          <>
            <Grid2 container spacing={4}>
              {items.map((food: FoodProps, idx: number) => (
                <ProductItem key={food.id} item={food} index={idx} />
              ))}
            </Grid2>
            {total > PAGE_SIZE && (
              <Stack alignItems="center" mt={3}>
                <Pagination
                  count={Math.ceil(total / PAGE_SIZE)}
                  page={page}
                  onChange={handlePageChange}
                />
              </Stack>
            )}
            <Typography variant="body2" color="secondary" align="center" mt={5}>
              {`${PAGE_SIZE * (page - 1) + 1}–${Math.min(
                PAGE_SIZE * page,
                total
              )} из ${total} товаров`}
            </Typography>
          </>
        );
      }
      default:
        return null;
    }
  }, [foodListLoadable, page, handlePageChange]);

  return (
    <Grid2 container spacing={3} p={3}>
      <Grid2 size={{ xs: 12, sm: 6, md: 9 }} />

      {/* Mobile Filters Button */}
      <Grid2
        size={12}
        textAlign="right"
        sx={{ display: { sm: "block", md: "none" } }}
      >
        <Button
          onClick={handleToggleFilters}
          variant="contained"
          sx={{
            borderRadius: 2,
            minWidth: "auto",
            p: 1,
            borderColor: alpha(theme.palette.divider, 0.2),
          }}
          startIcon={<FilterAltIcon />}
        >
          Фильтры
        </Button>
        <ProductFilterSidebar
          open={openFiltersBar}
          onClose={handleToggleFilters}
          variant="temporary"
        />
      </Grid2>
      {/* Products List */}
      <Grid2 size={12}>{content}</Grid2>
    </Grid2>
  );
}
