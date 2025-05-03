import React from "react";
import { Card, Typography, Divider } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2";
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

import Information from "views/LandingPages/AboutUs/sections/Information";
import Team from "views/LandingPages/AboutUs/sections/Team";

const AboutSideCover = () => {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        action={{
          type: "external",
          route: "/catalog",
          label: "Каталог",
          color: "default",
        }}
        transparent
        light
      />
      <MKBox
        minHeight="75vh"
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
              Work with an amazing design
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              We&apos;re constantly trying to express ourselves and actualize
              our dreams. If you have the opportunity to play this game
            </MKTypography>
            <MKButton
              color="default"
              sx={{ color: ({ palette: { dark } }) => dark.main }}
            >
              create account
            </MKButton>
            <MKTypography variant="h6" color="white" mt={8} mb={1}>
              Find us on
            </MKTypography>
            <MKBox display="flex" justifyContent="center" alignItems="center">
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-facebook" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-instagram" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
                mr={3}
              >
                <i className="fab fa-twitter" />
              </MKTypography>
              <MKTypography
                component="a"
                variant="body1"
                color="white"
                href="#"
              >
                <i className="fab fa-google-plus" />
              </MKTypography>
            </MKBox>
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
            head="О нас"
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

export default AboutSideCover;
