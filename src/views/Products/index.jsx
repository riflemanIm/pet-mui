import Card from "@mui/material/Card";
import Container from "components/Container";
import DefaultFooter from "components/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";

import footerRoutes from "assets/footer.routes";
import bgImage from "assets/images/bg_cat_dog.jpg";
import routes from "assets/routes";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/system";
import MKButton from "components/MKButton";
import { useCallback, useState } from "react";
import ProductFilterHor from "./ProductFilterHor";
import ProductFilterSidebar from "./ProductFilterSidebar";
import Products from "./Products";
import ProductSort from "./ProductSort";

export default function IndexProducts() {
  const [openFiltersBar, setOpenFiltersBar] = useState(false);

  const handleToggleFilters = useCallback(() => {
    setOpenFiltersBar((prev) => !prev);
  }, []);
  const isMobile = useMediaQuery((theme) => theme.breakpoints.down("md"));
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
            mt={{ xs: 10, sm: 10, md: -10, lg: -20 }}
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
        {!isMobile && (
          <Card
            sx={{
              p: 4,
              mx: { xs: 2, lg: 3 },
              mt: 42,
              backgroundColor: ({ palette: { white }, functions: { rgba } }) =>
                rgba(white.main, 0.9),
              backdropFilter: "saturate(200%) blur(30px)",
              boxShadow: ({ boxShadows: { xxl } }) => xxl,
              position: "absolute",
              zIndex: 999,
            }}
          >
            <ProductFilterHor />
          </Card>
        )}
        {/* Mobile Filters Button */}
        {isMobile && (
          <Stack direction="row" spacing={2} mt={{ xs: -20, sm: -20 }}>
            <MKButton
              onClick={handleToggleFilters}
              variant="contained"
              sx={(theme) => ({
                borderRadius: 2,
                minWidth: "auto",
                p: 1,
              })}
              startIcon={<FilterAltIcon />}
            >
              Фильтры
            </MKButton>
            <ProductSort />
            <ProductFilterSidebar
              open={openFiltersBar}
              onClose={handleToggleFilters}
              variant="temporary"
            />
          </Stack>
        )}
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
        <Container>
          <Products />
        </Container>
      </Card>

      {/* Footer */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
