import { CircularProgress } from "@mui/material";
import Grid from "@mui/material/Grid";
import React, { FC, useEffect, useState } from "react";
import { fetchFoodDetailsById } from "actions/food";
import { useAppState } from "context/AppStateContext";
import type { FoodDetailProps, FoodImgAddProp } from "types";
import { Details, ImageView } from "./components";

type Props = {
  onDetailsLoaded?: (details: FoodDetailProps | null) => void;
};

const CardDetails: FC<Props> = ({ onDetailsLoaded }) => {
  const { foodDetailsId } = useAppState();
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<any>(null);
  const [foodDetails, setFoodDetails] = useState<FoodDetailProps | null>(null);

  useEffect(() => {
    if (foodDetailsId == null) {
      setFoodDetails(null);
      onDetailsLoaded?.(null);
      setLoading(false);
      return;
    }

    let cancelled = false;
    async function loadDetails() {
      setLoading(true);
      setError(null);
      const response = await fetchFoodDetailsById(String(foodDetailsId));
      if (cancelled) return;
      if (response.error) {
        setError(response.error);
        setLoading(false);
        return;
      }
      setFoodDetails(response.content);
      onDetailsLoaded?.(response.content);
      setLoading(false);
    }
    loadDetails();
    return () => {
      cancelled = true;
    };
  }, [foodDetailsId, onDetailsLoaded]);

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    throw error;
  }

  if (!foodDetails) {
    return null;
  }

  const extraImgs =
    foodDetails.foodImgAdd?.map((item: FoodImgAddProp) => item.img) ?? [];
  const mainImg = foodDetails.img ? [foodDetails.img] : [];

  return (
    <Grid container spacing={{ xs: 2, md: 4 }}>
      <Grid item xs={12} md={6}>
        <ImageView
          imgs={[...mainImg, ...extraImgs]}
          title={foodDetails.title}
        />
      </Grid>
      <Grid item xs={12} md={6}>
        <Details item={foodDetails} />
      </Grid>
    </Grid>
  );
};

export default CardDetails;
