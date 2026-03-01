import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Card from "@mui/material/Card";
import Container from "components/Container";
import DefaultFooter from "components/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import { useRouter } from "next/router";

import footerRoutes from "assets/footer.routes";
import bgImage from "assets/images/2149392633.jpg";
import routes from "assets/routes";

import { useCallback, useState } from "react";
import CardDetails from "./CardDetails";

export default function IndexProducts() {
  const router = useRouter();
  const [detailsTitle, setDetailsTitle] = useState("");
  const handleDetailsLoaded = useCallback((item) => {
    setDetailsTitle(item?.title ?? "");
  }, []);

  const handleBackToCatalog = useCallback(() => {
    const returnToParam = router.query.returnTo;
    const returnTo = Array.isArray(returnToParam)
      ? returnToParam[0]
      : returnToParam;

    if (typeof returnTo === "string" && returnTo.startsWith("/catalog")) {
      router.push(returnTo);
      return;
    }

    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push("/catalog");
  }, [router]);

  return (
    <>
      {/* Navbar */}
      <DefaultNavbar routes={routes} transparent light />

      {/* Hero Section */}
      <MKBox
        minHeight={{ xs: "55vh", sm: "55vh", md: "55vh", lg: "55vh" }}
        width="100%"
        sx={(theme) => ({
          backgroundImage: `${theme.functions.linearGradient(
            theme.functions.rgba(theme.palette.gradients.dark.main, 0.6),
            theme.functions.rgba(theme.palette.gradients.dark.state, 0.6),
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
            mt={{ xs: 10, sm: 10, md: -5, lg: -10 }}
          >
            {detailsTitle || "Каталог продуктов"}
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

          <MKButton
            variant="contained"
            onClick={handleBackToCatalog}
            sx={() => ({
              borderRadius: 2,
              minWidth: "auto",
              p: 1,
              zIndex: 100,
            })}
            startIcon={<ArrowBackIcon />}
          >
            Вернуться в Каталог
          </MKButton>
        </Container>
      </MKBox>

      {/* Products Section */}
      <Card
        sx={(theme) => ({
          p: 2,
          mx: { xs: 2, lg: 3 },
          mt: -20,
          mb: 4,
          boxShadow: theme.boxShadows.xxl,
        })}
      >
        <Container>
          <CardDetails onDetailsLoaded={handleDetailsLoaded} />
        </Container>
      </Card>

      {/* Footer */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
