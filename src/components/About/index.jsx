import React from "react";
import Divider from "@mui/material/Divider";
import Main from "layouts/Main";
import Container from "components/Container";
import { Gallery, Headline, Numbers, Story, Team } from "./components";

const AboutSideCover = () => {
  return (
    <Main>
      <Container>
        <Headline />
      </Container>
      <Container paddingY={"0 !important"}>
        <Gallery />
      </Container>
      <Container maxWidth={"800px !important"}>
        <Numbers />
      </Container>
      <Container maxWidth={"800px !important"}>
        <Divider />
      </Container>
      <Container>
        <Team />
      </Container>
      <Container maxWidth={"800px !important"}>
        <Divider />
      </Container>
      <Container>
        <Story />
      </Container>
    </Main>
  );
};

export default AboutSideCover;
