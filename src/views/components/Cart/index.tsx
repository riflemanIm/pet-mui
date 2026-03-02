import Card from "@mui/material/Card";
import footerRoutes from "assets/footer.routes";
import bgImage from "assets/images/2149392611.jpg";
import routes from "assets/routes";
import Container from "components/Container";
import DefaultFooter from "components/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";

import ShoppingCartList from "./ShoppingCartList";

const CartView = () => {
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight={{ xs: 220, md: 360 }}
        width="100%"
        sx={(theme) => ({
          position: "relative",
          overflow: "hidden",
          backgroundImage: `url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          color: theme.palette.common.white,
        })}
      >
        <MKBox
          sx={{
            position: "absolute",
            inset: 0,
            background:
              "linear-gradient(90deg, rgba(0,0,0,0.62) 0%, rgba(0,0,0,0.32) 58%, rgba(0,0,0,0.16) 100%)",
          }}
        />
        <Container
          sx={{
            position: "relative",
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            justifyContent: "center",
            pt: { xs: 15, md: 17 },
            pb: { xs: 5, md: 6 },
          }}
        >
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }: any) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
              fontWeight: 800,
            })}
          >
            Корзина
          </MKTypography>
          <MKTypography
            variant="body1"
            color="white"
            opacity={0.8}
            mt={1}
            mb={0}
          >
            Проверьте товары и оформите заказ в один кликов.
          </MKTypography>
        </Container>
      </MKBox>
      <Card
        sx={(theme) => ({
          mx: { xs: 2, lg: 3 },
          mt: { xs: -3, md: -5 },
          mb: 4,
          borderRadius: 3,
          boxShadow: (theme as any).boxShadows.xl,
          position: "relative",
          zIndex: 2,
        })}
      >
        <Container sx={{ py: 3 }}>
          <ShoppingCartList />
        </Container>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default CartView;
