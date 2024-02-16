import React, { FC } from "react";
import Box from "@mui/material/Box";
import Main from "../../layouts/Main";
import Container from "../../components/Container";
import {
  // Categories,
  // FeaturedProducts,
  // Hero,
  // LatestProducts,
  // News,
  // Newsletter,
  // Overview,
  Products,
  // QuickSearch,
  // Reviews,
} from "./components";
import { useRecoilState } from "recoil";
import { homePageFoodSumState, homePageQueryState } from "atoms";
import { PAGE_SIZE } from "types";
//import PaginationCustom from "./components/Products/Pagination";
import { Pagination, Stack } from "@mui/material";

const Ecommerce: FC = () => {
  const [homePageQueryData, setHomePageQueryData] =
    useRecoilState(homePageQueryState);
  const [homePageFoodSum] = useRecoilState(homePageFoodSumState);
  console.log("homePageFoodSum", homePageFoodSum);
  const handleClickPagination = (page: number) => {
    setHomePageQueryData({ ...homePageQueryData, page });
  };

  return (
    <Main>
      {/* <Container>
        <Hero />
      </Container>
      <Container paddingY={'0 !important'}>
        <Overview />
      </Container>
      <Container>
        <Categories />
      </Container>
      <Box bgcolor={'secondary.main'}>
        <Container>
          <FeaturedProducts />
        </Container>
      </Box> */}
      <Container>
        <Products page={homePageQueryData?.page || 1} pageSize={PAGE_SIZE} />

        <Stack spacing={2} alignItems="center" mt={3}>
          <Pagination
            count={Math.round(homePageFoodSum / PAGE_SIZE)}
            variant="outlined"
            page={homePageQueryData?.page || 1}
            onChange={(_, page: number) => handleClickPagination(page)}
          />
        </Stack>
      </Container>
      {/* <Box bgcolor={'alternate.main'}>
        <Container>
          <News />
        </Container>
      </Box>
      <Container>
        <LatestProducts />
      </Container>
      <Container paddingTop={'0 !important'}>
        <QuickSearch />
      </Container>
      <Box bgcolor={'alternate.main'}>
        <Container>
          <Reviews />
        </Container>
      </Box>
      <Container>
        <Newsletter />
      </Container> */}
    </Main>
  );
};

export default Ecommerce;
