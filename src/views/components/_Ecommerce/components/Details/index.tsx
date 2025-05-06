import React, { FC } from "react";
import Main from "layouts/Main";
import Container from "../../../Container";

import CardDetails from "./CardDetails";
import { useRecoilState } from "recoil";
//import { foodRatingQuery } from "selectors";
import { foodDetailsIdState } from "atoms";

const Details: FC = () => {
  //const addRatingDialogRef = React.useRef<HTMLDialogElement>(null);

  //const foodRatingLoadable = useRecoilValueLoadable(foodRatingQuery);
  const [foodDetailsId] = useRecoilState(foodDetailsIdState);

  //console.log("foodDetailsId", foodDetailsId);

  return (
    foodDetailsId && (
      <Main>
        <Container>
          <CardDetails />
        </Container>
      </Main>
    )
  );
};

export default Details;
