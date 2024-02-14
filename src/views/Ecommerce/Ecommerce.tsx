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
import Pagination from "./components/Products/Pagination";

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
        <Box className="flex justify-center pt-6">
          <Pagination
            currentPage={homePageQueryData?.page || 1}
            pages={Math.round(homePageFoodSum / PAGE_SIZE)}
            onClick={handleClickPagination}
          />
        </Box>
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
