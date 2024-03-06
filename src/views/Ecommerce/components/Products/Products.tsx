import React, { FC, useState } from "react";
import { alpha, useTheme } from "@mui/material/styles";
import MenuIcon from "@mui/icons-material/Menu";

import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";

import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { homePageQuery } from "selectors";
import { homePageFoodSumState } from "atoms";
import { FoodProps, ProductsPageProps } from "types";
import ProductItem from "./ProductItem";
import ProductFilterSidebar from "./ProductFilterSidebar";

const Products = (props: ProductsPageProps) => {
  const theme = useTheme();
  const { page, pageSize } = props;
  // const foodListLoadable = useRecoilValueLoadable(currentPageIdxQuery);
  const foodListLoadable = useRecoilValueLoadable(homePageQuery);
  const [homePageFoodSum, setHomePageFoodSum] =
    useRecoilState(homePageFoodSumState);

  console.log("foodListLoadable.contents", foodListLoadable.contents);
  const RenderItems = () => {
    {
      switch (foodListLoadable.state) {
        case "hasValue":
          setHomePageFoodSum(foodListLoadable.contents.total);
          return (
            <>
              {!!homePageFoodSum && (
                <Box>{`${pageSize * (page - 1) + 1} ~ ${
                  pageSize * page > homePageFoodSum
                    ? homePageFoodSum
                    : pageSize * page
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
    <Box>
      <Box marginBottom={4}>
        <Typography
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
          variant="h4"
          align={"center"}
          data-aos={"fade-up"}
          gutterBottom
          sx={{
            fontWeight: 700,
          }}
        >
          Featured products
        </Typography>
        <Typography
          variant="h6"
          align={"center"}
          color={"text.secondary"}
          data-aos={"fade-up"}
        >
          Experience your music like never before. Buy music instruments &
          accessories online.
        </Typography>
        <Box display="flex" justifyContent={"center"} marginTop={2}>
          <Button
            onClick={() => handleToggleFilters()}
            aria-label="Menu"
            variant={"outlined"}
            sx={{
              borderRadius: 2,
              minWidth: "auto",
              padding: 1,
              borderColor: alpha(theme.palette.divider, 0.2),
            }}
          >
            <MenuIcon />
          </Button>
          <ProductFilterSidebar
            onClose={handleToggleFilters}
            open={openFiltersBar}
            variant="temporary"
          />
        </Box>
      </Box>
      <RenderItems />
    </Box>
  );
};

export default Products;
