import React, { useEffect } from "react";
//import type { NextPage } from "next";
import Ecommerce from "../src/views/Ecommerce";
import { NextPage } from "next";
// import {
//   //getOzonGoods,
//   getOzonGoodsCategoryAttributeValue,
//   getOzonGoodsCategoryAttributes,
//   //getOzonGoodsCategoryTree,
// } from "../src/actions/user";
// import { fetchFoods } from "../src/actions/food";
// import { useRecoilState } from "recoil";
// import { homePageFoodSumState, homePageQueryState } from "atoms";

const Home: NextPage = () => {
  // const [homePageQueryData, setHomePageQueryData] =
  //   useRecoilState(homePageQueryState);
  // const [homePageFoodSum] = useRecoilState(homePageFoodSumState);

  // const handleClickPagination = (page: number) => {
  //   setHomePageQueryData({ ...homePageQueryData, page });
  // };

  return <Ecommerce />;
};

export default Home;
