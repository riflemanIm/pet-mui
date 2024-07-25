import React from "react";
import Grid from "@mui/material/Grid";
import Main from "layouts/Main";
import Container from "components/Container";
import { Map, Form } from "./components";

const Contact = () => {
  return (
    <Main>
      <Container>
        <Grid container spacing={{ xs: 4, md: 8 }}>
          <Grid item xs={12} md={6}>
            <Map />
          </Grid>
          <Grid item container xs={12} md={6} alignItems={"center"}>
            <Form />
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};

export default Contact;
