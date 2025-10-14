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
import logo from "assets/logo-white.svg";
import Container from "components/Container";
import MKTypography from "components/MKTypography";

function Presentation() {
  return (
    <>
      <DefaultNavbar routes={routes} sticky />
      <MKBox
        minHeight="95vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MKBox
            component="img"
            src={logo.src}
            alt="logo"
            width={{ xs: "60%", sm: "40%", md: "30%" }}
            mt={{ xs: 10, sm: 20, md: 30 }}
            mb={15}
          />

          <MKTypography
            variant="h1"
            color="white"
            textAlign="center"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
          >
            Лучшие корма и лакомства для Вашего питомца.
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            textAlign="center"
            px={{ xs: 6, lg: 12 }}
            mt={1}
          >
            100% натуральный продукт. Мы заботимся о здоровье ваших питомцев
            вместе.
          </MKTypography>
        </Container>
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
