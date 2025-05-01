import React, { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import {
  FoodProps,
  FoodDicts,
  FoodDetailProps,
  FoodRatingsProps,
  FoodImgAddProp,
} from "../../../../types";

import { ImageView, Details } from "./components";
import { useRecoilValueLoadable } from "recoil";
import { foodInfoQuery } from "../../../../selectors";
import { CircularProgress } from "@mui/material";

const CardDetails: FC = () => {
  const [foodDetailsState, setFoodDetailsState] = React.useState<
    FoodDetailProps | undefined
  >();
  //const editFoodDetailDialogRef = React.useRef<HTMLDialogElement>(null);

  const foodDetailsLodable = useRecoilValueLoadable(foodInfoQuery);

  // const handleUpdate = (data: FoodDetailProps) => {
  //   setFoodDetailsState(data);
  // };

  const imgs = (foodDetailsLodable.contents?.content?.foodImgAdd || []).map(
    (it: FoodImgAddProp) => it.img
  );

  switch (foodDetailsLodable.state) {
    case "hasValue":
      return (
        <Grid container spacing={{ xs: 2, md: 4 }}>
          <Grid item xs={12} md={7}>
            <ImageView
              imgs={[foodDetailsLodable.contents?.content.img, ...imgs]}
              title={foodDetailsLodable.contents?.content.title}
            />
          </Grid>
          <Grid item xs={12} md={5}>
            <Details item={foodDetailsLodable.contents?.content} />
          </Grid>
        </Grid>
      );
    case "loading":
      return <CircularProgress />;
    case "hasError":
      throw foodDetailsLodable.contents;
  }
};

export default CardDetails;
