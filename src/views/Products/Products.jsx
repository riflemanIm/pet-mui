import {
  Alert,
  Box,
  CircularProgress,
  Pagination,
  Typography,
} from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import { homePageFoodSumState, homePageQueryState } from "atoms";
import { useCallback, useEffect, useMemo } from "react";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { homePageQuery } from "selectors";
import { PAGE_SIZE } from "types";
import ProductItem from "./ProductItem";

export default function Products() {
  const theme = useTheme();
  const foodListLoadable = useRecoilValueLoadable(homePageQuery);
  const [totalItems, setTotalItems] = useRecoilState(homePageFoodSumState);
  const [queryData, setQueryData] = useRecoilState(homePageQueryState);

  const page = queryData?.page ?? 1;

  const handlePageChange = useCallback(
    (event, value) => {
      setQueryData((prev) => ({ ...prev, page: value }));
    },
    [setQueryData]
  );

  useEffect(() => {
    if (foodListLoadable.state === "hasValue") {
      setTotalItems(foodListLoadable.contents.total);
    }
  }, [
    foodListLoadable.state,
    foodListLoadable.contents,
    totalItems,
    setTotalItems,
  ]);

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
            <Grid2 container spacing={6}>
              {items.map((food, idx) => (
                <ProductItem key={food.id} item={food} index={idx} />
              ))}

              {total > PAGE_SIZE && (
                <Grid2 alignItems="flex-end" justifyItems="center" size={12}>
                  <Pagination
                    count={Math.ceil(total / PAGE_SIZE)}
                    page={page}
                    onChange={handlePageChange}
                  />
                </Grid2>
              )}
              <Grid2 justifyItems="center" size={12}>
                <Typography
                  variant="body2"
                  color="secondary"
                  align="center"
                  mt={5}
                >
                  {`${PAGE_SIZE * (page - 1) + 1}–${Math.min(
                    PAGE_SIZE * page,
                    total
                  )} из ${total} товаров`}
                </Typography>
              </Grid2>
            </Grid2>
          </>
        );
      }
      default:
        return null;
    }
  }, [foodListLoadable, page, handlePageChange]);

  return (
    <Grid2 container spacing={3}>
      <Grid2 size={{ xs: 12, sm: 6, md: 9 }} />

      {/* Products List */}
      {content}
    </Grid2>
  );
}
