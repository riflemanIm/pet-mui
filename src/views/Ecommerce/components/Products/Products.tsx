import React, { FC, useState } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import FilterAltIcon from "@mui/icons-material/FilterAlt";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { Pagination, Stack } from "@mui/material";

import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { homePageQuery } from "selectors";
import { homePageFoodSumState, homePageQueryState } from "atoms";
import { FoodProps, PAGE_SIZE } from "types";
import ProductItem from "./ProductItem";
import ProductFilterSidebar from "./ProductFilterSidebar";
import ProductFilter from "./ProductFilter";
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

  const RenderItems = () => {
    {
      switch (foodListLoadable.state) {
        case "hasValue":
          setHomePageFoodSum(foodListLoadable.contents.total);
          return (
            <>
              {!!homePageFoodSum && (
                <Box>{`${PAGE_SIZE * (page - 1) + 1} ~ ${
                  PAGE_SIZE * page > homePageFoodSum
                    ? homePageFoodSum
                    : PAGE_SIZE * page
                } of over ${homePageFoodSum} results`}</Box>
              )}

              <Grid container spacing={4}>
                {foodListLoadable.contents.content.map(
                  (food: FoodProps, inx: number) => (
                    <ProductItem item={food} key={food.id} i={inx} />
                  )
                )}
              </Grid>
            </>
          );
        case "loading":
          return <Box>Loading...</Box>;
        case "hasError":
          throw foodListLoadable.contents;
      }
    }
  };
  const [openFiltersBar, setOpenFiltersBar] = useState(false);
  const handleToggleFilters = () => {
    setOpenFiltersBar(!openFiltersBar);
  };
  return (
    <>
      <Box marginBottom={4}>
        {/* <Typography
          sx={{
            textTransform: "uppercase",
            fontWeight: "medium",
          }}
          gutterBottom
          color={"secondary"}
          align={"center"}
        >
          Products
        </Typography>

        <Typography
          variant="h6"
          align={"center"}
          color={"text.secondary"}
          data-aos={"fade-up"}
        >
          Experience your music like never before. Buy music instruments &
          accessories online.
        </Typography> */}
      </Box>
      <Grid container spacing={3} p={3}>
        <Grid item xs={6}>
          <Typography
            variant="h4"
            data-aos={"fade-up"}
            gutterBottom
            sx={{
              fontWeight: 700,
            }}
          >
            Каталог товаров
          </Typography>
        </Grid>
        <Grid item xs={3}>
          <Button
            onClick={() => handleToggleFilters()}
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
        </Grid>
        <Grid item xs={3}>
          <ProductSort />
        </Grid>
        <Grid item xs={3}>
          <ProductFilter />
        </Grid>
        <Grid item xs={9}>
          <RenderItems />
        </Grid>
      </Grid>
      <Stack spacing={2} alignItems="center" mt={3}>
        <Pagination
          count={Math.round(homePageFoodSum / PAGE_SIZE)}
          variant="outlined"
          page={page}
          onChange={(_, page: number) => handleClickPagination(page)}
        />
      </Stack>
    </>
  );
};

export default Products;
