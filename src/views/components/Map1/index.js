import React, { useState } from "react";
import Main from "layouts/Main";
import Container from "components/Container";
import Map from "components/YandexMap";
import Grid from "@mui/material/Grid";
import Headline from "./components/Headline";
import SwitchCities from "./components/SwitchCities";

const Contact = () => {
  const [coordinates, setCoordinates] = useState("45.032744, 39.094367");
  return (
    <Main>
      <Container>
        <Headline />
        <Grid container spacing={1}>
          <Grid item xs={12} md={10} sx={{ minHeight: 500 }}>
            <Map coordinates={coordinates} />
          </Grid>
          <Grid item xs={12} md={2}>
            <SwitchCities
              coordinates={coordinates}
              setCoordinates={setCoordinates}
            />
          </Grid>
        </Grid>
      </Container>
    </Main>
  );
};

export default Contact;
