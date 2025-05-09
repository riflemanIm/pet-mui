import Card from "@mui/material/Card";
import Grid2 from "@mui/material/Grid2";
import Container from "components/Container";
import Headline from "components/Headline";
import { Form, Map } from "./components";

import footerRoutes from "assets/footer.routes";
import bgImage from "assets/images/bg-coworking.jpeg";
import routes from "assets/routes";
import DefaultFooter from "components/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
const Contact = () => {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="35vh"
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
              Наши контакты
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              Если Вы хотите обратиться к нам с вопросами, или у Вас появилось
              предложение, воспользуйтесь нашими указанными контактами и мы
              обязательно Вам ответим!
            </MKTypography>
          </Grid2>
        </Container>
      </MKBox>
      <Card
        sx={{
          mx: { xs: 2, lg: 3 },
          mt: -8,

          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          {/* <Grid2 container spacing={{ xs: 4, md: 8 }} mt={{ xs: 1, md: 2 }}>
            <Grid2 size={{ xs: 12, md: 6 }}>
              <Map />
            </Grid2>
            <Grid2 size={{ xs: 12, md: 6 }} alignItems={"center"}>
              <Form />
            </Grid2>
          </Grid2> */}
          <Map />
        </Container>
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default Contact;
