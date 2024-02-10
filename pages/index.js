import React, { useEffect } from "react";
import IndexView from "../src/views/IndexView";
import {
  getOzonGoods,
  getOzonGoodsCategoryAttributeValue,
  getOzonGoodsCategoryAttributes,
  getOzonGoodsCategoryTree,
} from "../src/actions/user";

export default function Index() {
  useEffect(async () => {
    await getOzonGoodsCategoryTree();
    const data = await getOzonGoodsCategoryAttributes();
    data.result.forEach(
      async ({ id, is_required, name, attribute_complex_id }) => {
        // console.log(" --- name ---", name);
        await getOzonGoodsCategoryAttributeValue(id, name);
      }
    );
    //getOzonGoods();
  }, []);
  return <IndexView />;
}

export async function getServerSideProps() {
  return { props: {} };
}
