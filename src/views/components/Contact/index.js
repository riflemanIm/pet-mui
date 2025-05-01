import React from "react";
import Grid from "@mui/material/Grid";
import Main from "layouts/Main";
import Container from "components/Container";
import { Map, Form } from "./components";
import Headline from "components/Headline";

const Contact = () => {
  return (
    <Main>
      <Container>
        <Headline
          head="Наши контакты"
          subhead1="Если Вы хотите обратиться к нам с вопросами, или у Вас появилось предложение, воспользуйтесь нашими указанными контактами и мы обязательно Вам ответим!"
          //align="left"
        />
        <Grid container spacing={{ xs: 4, md: 8 }} mt={{ xs: 1, md: 2 }}>
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
