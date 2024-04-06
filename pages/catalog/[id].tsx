import React from "react";
import EcommerceDetails from "components/Ecommerce/components/Details";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useRecoilState } from "recoil";
import { foodDetailsIdState } from "atoms";

const PageEcommerceDetails: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const [, setFoodDetailsId] = useRecoilState(foodDetailsIdState);
  // const foodDetailsLodable = useRecoilValueLoadable(foodDetailsQuery);

  React.useEffect(() => {
    id && setFoodDetailsId(id as string);
  }, [id, setFoodDetailsId]);

  return <EcommerceDetails />;
};

export default PageEcommerceDetails;
