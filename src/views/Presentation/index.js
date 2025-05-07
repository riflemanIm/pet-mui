import Card from "@mui/material/Card";

//
import MKBox from "components/MKBox";

// Shepherd React examples
import DefaultFooter from "components/Footers/DefaultFooter";
import DefaultNavbar from "components/Navbars/DefaultNavbar";

// Routes
import footerRoutes from "assets/footer.routes";
import routes from "assets/routes";
import IndexView from "views/components/Home";
// Images
import bgImage from "assets/images/bg-hero.jpg";
import { Typography } from "@mui/material";

function Presentation() {
  return (
    <>
      <DefaultNavbar
        routes={routes}
        sticky
      />
      <MKBox
        minHeight="75vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        {/* <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="">
            <MKTypography
              variant="h1"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Кубань-Телеком, Кубтел. Провайдер Краснодар.
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Домашний интернет и ТВ, безлимитные тарифы. Интернет оператор.
            </MKTypography>
          </Grid>
        </Container> */}
      </MKBox>
      <Card
        sx={{
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
            rgba(white.main, 0.8),
          backdropFilter: "saturate(200%) blur(30px)",
          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <IndexView />
      </Card>
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}

export default Presentation;
