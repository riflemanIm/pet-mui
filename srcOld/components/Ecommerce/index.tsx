import React, { FC } from "react";
import Main from "../../layouts/Main";
import Container from "../Container";
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

const Ecommerce: FC = () => {
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
        <Products />
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
