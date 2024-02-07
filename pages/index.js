import React, { useEffect } from "react";
import IndexView from "../src/views/IndexView";
import { getOzonGoods, getOzonGoodsCategory } from "../src/actions/user";

export default function Index() {
  useEffect(async () => {
    getOzonGoodsCategory();
    getOzonGoods();
  }, []);
  return <IndexView />;
}

export async function getServerSideProps() {
  return { props: {} };
}
