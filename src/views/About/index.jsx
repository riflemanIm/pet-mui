import React from "react";
import { Card, Typography, Divider } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import footerRoutes from "assets/footer.routes";
import bgImage from "assets/images/bg-about-us.jpg";
import routes from "assets/routes";
import Container from "components/Container";
import DefaultFooter from "components/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import { Gallery, Headline, Numbers, Story } from "./components";

import Information from "./sections/Information";
import Team from "./sections/Team";

const About = () => {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="55vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid2
            container
            size={{ xs: 12, lg: 8 }}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Компания Shepherd Pet
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              Мы поможем Вам на каждом этапе процесса. Наши специалисты
              проконсультируют Вас по любым вопросам питания и пищевого
              поведения вашего питомца
            </MKTypography>
          </Grid2>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Information />
        <Team />
        <Divider />
        <Story />
        <Divider />
        <Container>
          <Headline
            subhead1="Мы поможем Вам на каждом этапе процесса"
            subhead2="Наши специалисты проконсультируют Вас по любым вопросам питания и пищевого поведения вашего питомца"
          />
        </Container>
        <Container paddingY="0 !important">
          <Gallery />
          <Typography
            component="p"
            color="text.secondary"
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
        <Container maxWidth="800px !important">
          <Numbers />
        </Container>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default About;
