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
        minHeight={{ xs: 280, md: 340 }}
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
            variant="h2"
            color="white"
            sx={({ breakpoints, typography: { size } }) => ({
              [breakpoints.down("md")]: {
                fontSize: size["3xl"],
              },
              fontWeight: 800,
              letterSpacing: 0.2,
              maxWidth: 980,
            })}
          >
            {detailsTitle || "Каталог продуктов"}
          </MKTypography>

          <MKTypography
            variant="body1"
            color="white"
            opacity={0.9}
            mt={1}
            mb={2}
            maxWidth={620}
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
              px: 2,
              py: 1,
              alignSelf: "flex-end",
              zIndex: 100,
              bgcolor: "rgba(255,255,255,0.92)",
              color: "text.primary",
              "&:hover": {
                bgcolor: "rgba(255,255,255,1)",
              },
            })}
            mb={{ xs: 2, md: 2.5 }}
            startIcon={<ArrowBackIcon />}
          >
            Вернуться в Каталог
          </MKButton>
        </Container>
      </MKBox>

      {/* Products Section */}
      <Card
        sx={(theme) => ({
          mx: { xs: 2, lg: 3 },
          mt: { xs: -2, md: -4 },
          mb: 4,
          borderRadius: 3,
          boxShadow: theme.boxShadows.xl,
          position: "relative",
          zIndex: 2,
        })}
      >
        <Container sx={{ py: 3 }}>
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
