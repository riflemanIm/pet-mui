import React from "react";
import Divider from "@mui/material/Divider";
import Main from "layouts/Main";
import Container from "components/Container";
import { Gallery, Headline, Numbers, Story, Team } from "./components";
import { Typography } from "@mui/material";

const AboutSideCover = () => {
  return (
    <Main>
      <Container>
        <Headline />
      </Container>
      <Container paddingY={"0 !important"}>
        <Gallery />
        <Typography
          component={"p"}
          color={"text.secondary"}
          fontWeight={400}
          mt={3}
          textAlign="center"
        >
          Компания Shepherd Pet предлагает любые кома и лакомства, которые
          помогут не просто кормить, но и дрессировать Вашего питомца. Мы
          помогаем каждый день нашим клиентам находить информацию, необходимую
          им для обеспечения наилучшей жизни своим питомцам. Наша команда
          авторов, в которую входят тренеры, ветеринарные специалисты и врачи
          ветеринарной медицины, создают и обновляют информативные статьи,
          полные ценных идей, отточенных на основе многолетнего практического
          опыта для питания и дрессировки.
        </Typography>
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
