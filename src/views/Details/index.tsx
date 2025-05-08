import Card from "@mui/material/Card";
import Container from "components/Container";
import DefaultFooter from "components/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";

import footerRoutes from "assets/footer.routes";
import bgImage from "assets/images/bg_cat_dog.jpg";
import routes from "assets/routes";

import ProductFilterHor from "../Products/ProductFilterHor";

import ProductSort from "../Products/ProductSort";
import { foodDetailsIdState } from "atoms";
import { useRecoilState } from "recoil";
import { Details } from "./components";
import CardDetails from "./CardDetails";

export default function IndexProducts() {
  const [foodDetailsId] = useRecoilState(foodDetailsIdState);
  return (
    <>
      {/* Navbar */}
      <DefaultNavbar routes={routes} transparent light />

      {/* Hero Section */}
      <MKBox
        minHeight="65vh"
        width="100%"
        sx={(theme) => ({
          backgroundImage: `${theme.functions.linearGradient(
            theme.functions.rgba(theme.palette.gradients.dark.main, 0.6),
            theme.functions.rgba(theme.palette.gradients.dark.state, 0.6)
          )}, url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        })}
      >
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
            })}
            mt={2}
          >
            Каталог продуктов
          </MKTypography>

          <MKTypography
            variant="body1"
            color="white"
            opacity={0.8}
            mt={1}
            mb={2}
          >
            100% натуральный продукт. Мы заботимся о здоровье ваших питомцев
            вместе.
          </MKTypography>

          {/* Sort */}
        </Container>
        <Card
          sx={{
            p: 4,
            mx: { xs: 2, lg: 3 },
            mt: -22,
            backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
              rgba(white.main, 0.9),
            backdropFilter: "saturate(200%) blur(30px)",
            boxShadow: ({ boxShadows: { xxl } }) => xxl,
          }}
        >
          <ProductFilterHor />
          <ProductSort />
        </Card>
      </MKBox>

      {/* Products Section */}
      <Card
        sx={(theme) => ({
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,
          boxShadow: theme.boxShadows.xxl,
        })}
      >
        <Container>{foodDetailsId && <CardDetails />}</Container>
      </Card>

      {/* Footer */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
