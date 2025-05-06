import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { alpha, useTheme } from "@mui/material/styles";
import { FC, useState } from "react";

import { Alert, Pagination, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Grid2 from "@mui/material/Grid2";
import Typography from "@mui/material/Typography";

import { homePageFoodSumState, homePageQueryState } from "atoms";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { homePageQuery } from "selectors";
import { FoodProps, PAGE_SIZE } from "types";
import ProductFilter from "./ProductFilter";
import ProductFilterSidebar from "./ProductFilterSidebar";
import ProductItem from "./ProductItem";
import ProductSort from "./ProductSort";

const Products: FC = () => {
  const theme = useTheme();

  const foodListLoadable = useRecoilValueLoadable(homePageQuery);
  const [homePageFoodSum, setHomePageFoodSum] =
    useRecoilState(homePageFoodSumState);

  const [homePageQueryData, setHomePageQueryData] =
    useRecoilState(homePageQueryState);

  const page = homePageQueryData?.page || 1;

  const handleClickPagination = (page: number) => {
    setHomePageQueryData({ ...homePageQueryData, page });
  };
  const [openFiltersBar, setOpenFiltersBar] = useState(false);
  const handleToggleFilters = () => {
    setOpenFiltersBar(!openFiltersBar);
  };

  const RenderItems = () => {
    switch (foodListLoadable.state) {
      case "hasValue":
        setHomePageFoodSum(foodListLoadable.contents.total);
        return (
          <>
            <Grid2 container spacing={4}>
              {foodListLoadable.contents.content.map(
                (food: FoodProps, inx: number) => (
                  <ProductItem item={food} key={food.id} i={inx} />
                )
              )}
            </Grid2>
            {homePageFoodSum > PAGE_SIZE && (
              <Stack spacing={2} alignItems="center" mt={3}>
                <Pagination
                  count={Math.round(homePageFoodSum / PAGE_SIZE)}
                  variant="outlined"
                  page={page}
                  onChange={(_, page: number) => handleClickPagination(page)}
                />
              </Stack>
            )}
            {homePageFoodSum === 0 ? (
              <Box mt={5}>
                <Alert severity="error">
                  <Typography variant="body2" data-aos="fade-up">
                    По заданным фильтрам товаров не найдено
                  </Typography>
                </Alert>
              </Box>
            ) : (
              <Typography
                variant="body2"
                gutterBottom
                color="secondary"
                align="center"
                data-aos="fade-up"
                mt={5}
              >{`${PAGE_SIZE * (page - 1) + 1} ~ ${
                PAGE_SIZE * page > homePageFoodSum
                  ? homePageFoodSum
                  : PAGE_SIZE * page
              } из ${homePageFoodSum} товаров`}</Typography>
            )}
          </>
        );
      case "loading":
        return <Box>Loading...</Box>;
      case "hasError":
        throw foodListLoadable.contents;
    }
  };

  return (
    
    
      <Grid2 container spacing={3} p={3}>
        <Grid2 size={{ xs: 12, sm: 6, md: 9 }} />
        <Grid2
          size={{ xs: 6, sm: 3 }}
          textAlign="right"
          sx={{ display: { sm: "block", md: "none" } }}
        >
          <Button
            onClick={handleToggleFilters}
            aria-label="Menu"
            variant="contained"
            sx={{
              borderRadius: 2,
              minWidth: "auto",
              padding: 1,
              borderColor: alpha(theme.palette.divider, 0.2),
            }}
            startIcon={<FilterAltIcon />}
          >
            Фильтры
          </Button>
          <ProductFilterSidebar
            onClose={handleToggleFilters}
            open={openFiltersBar}
            variant="temporary"
          />
        </Grid2>
        <Grid2 size={{ xs: 6, sm: 3, md: 3 }}>
          {homePageFoodSum > 0 && <ProductSort />}
        </Grid2>
        <Grid2
          size={{ md: 3 }}
          sx={{ display: { md: "block", sm: "none", xs: "none" } }}
        >
          <ProductFilter />
        </Grid2>
        <Grid2 size={{ sm: 12, md: 9 }}>
          <RenderItems />
        </Grid2>
      </Grid2>
    
  );
};

export default Products;
