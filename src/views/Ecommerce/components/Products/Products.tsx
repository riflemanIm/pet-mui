import React, { FC } from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { useTheme } from "@mui/material/styles";
import { useRecoilState, useRecoilValueLoadable } from "recoil";
import { homePageQuery } from "selectors";
import { homePageFoodSumState } from "atoms";
import { FoodProps, ProductsPageProps } from "types";
import ProductItem from "./ProductItem";
import ProductFilter from "./ProductFilter";

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
          <ProductFilter />
        </Box>
      </Box>
      <RenderItems />
    </Box>
  );
};

export default Products;
