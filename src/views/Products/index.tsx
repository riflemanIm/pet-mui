// IndexProducts.tsx
import Card from "@mui/material/Card";
import Container from "components/Container";
import DefaultFooter from "components/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";

import footerRoutes from "assets/footer.routes";
import bgImage from "assets/images/2149392632.jpg";
import routes from "assets/routes";

import FilterAltIcon from "@mui/icons-material/FilterAlt";
import { Grid2 } from "@mui/material";
import Stack from "@mui/material/Stack";
import { useMediaQuery } from "@mui/system";
import MKButton from "components/MKButton";
import { useCallback, useState } from "react";
import ProductFilter from "./ProductFilter";
import ProductFilterSidebar from "./ProductFilterSidebar";
import Products from "./Products";
import ProductSort from "./ProductSort";

export default function IndexProducts() {
  const [openFiltersBar, setOpenFiltersBar] = useState(false);

  const handleToggleFilters = useCallback(() => {
    setOpenFiltersBar((prev) => !prev);
  }, []);
  const isMobile = useMediaQuery((theme: any) => theme.breakpoints.down("md"));
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />

      <MKBox
        minHeight={{ xs: "55vh", sm: "55vh", md: "55vh", lg: "55vh" }}
        width="100%"
        sx={(theme) => ({
          backgroundImage: `${(theme as any).functions.linearGradient(
            (theme as any).functions.rgba(
              (theme as any).palette.gradients.dark.main,
              0.6,
            ),
            (theme as any).functions.rgba(
              (theme as any).palette.gradients.dark.state,
              0.6,
            ),
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
            sx={({ breakpoints, typography: { size } }: any) => ({
              [breakpoints.down("md")]: { fontSize: size["3xl"] },
            })}
            mt={{ xs: 10, sm: 0, md: -10, lg: -20 }}
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
          {!isMobile && <ProductSort />}
        </Container>

        {isMobile && (
          <Stack direction="row" spacing={2} mt={{ xs: -30, sm: -50 }}>
            <MKButton
              onClick={handleToggleFilters}
              variant="contained"
              sx={{ borderRadius: 2, minWidth: "auto", p: 1 }}
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

      <Card
        sx={(theme) => ({
          mx: { xs: 2, lg: 3 },
          mt: { xs: -20, sm: -30 },
          mb: 4,
          boxShadow: (theme as any).boxShadows.xxl,
        })}
      >
        <Container>
          {!isMobile && (
            <Grid2 container spacing={2}>
              <Grid2
                size={{ xs: 6, sm: 6, md: 6, lg: 3, xl: 3 }}
                sx={{
                  position: "sticky",
                  top: { lg: 88, xl: 88 },
                  alignSelf: "flex-start",
                  zIndex: 10,
                }}
              >
                <ProductFilter />
              </Grid2>
              <Grid2 size={{ xs: 6, sm: 6, md: 6, lg: 9, xl: 9 }}>
                <Products />
              </Grid2>
            </Grid2>
          )}
          {isMobile && <Products />}
        </Container>
      </Card>

      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
}
