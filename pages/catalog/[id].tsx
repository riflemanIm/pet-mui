import React from "react";
import EcommerceDetails from "views/Details";
import { NextPage } from "next";
import { useRouter } from "next/router";
import { useAppState } from "context/AppStateContext";

const PageEcommerceDetails: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;

  const { setFoodDetailsId } = useAppState();

  React.useEffect(() => {
    const normalizedId = Array.isArray(id) ? id[0] : id;
    if (normalizedId && /^\d+$/.test(normalizedId)) {
      setFoodDetailsId(normalizedId);
    }
    return () => {
      setFoodDetailsId(null);
    };
  }, [id, setFoodDetailsId]);

  return <EcommerceDetails />;
};

export default PageEcommerceDetails;
