import React, { useEffect } from "react";
import IndexView from "../src/views/IndexView";

export default function Index() {
  useEffect(async () => {
    try {
      const res = await fetch(
        "https://api-seller.ozon.ru/v1/description-category/tree",
        {
          method: "post",
          body: JSON.stringify({
            language: "RU",
          }),
          headers: {
            "Content-Type": "application/json",
            "Api-Key": "ae****************16",
            "Client-Id": "1468751",
          },
        }
      );
    } catch (error) {
      console.log("error", error);
    }
  }, []);
  return <IndexView />;
}

export async function getServerSideProps() {
  return { props: {} };
}
