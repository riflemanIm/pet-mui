// IndexProducts.tsx
import Container from "components/Container";
import DefaultFooter from "components/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import Card from "@mui/material/Card";

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
        minHeight={{ xs: 240, md: 300 }}
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
            alignItems: { xs: "flex-start", md: "flex-start" },
            justifyContent: "center",
            pt: { xs: 13, md: 15 },
            pb: { xs: 5, md: 6 },
          }}
        >
          <MKTypography
            variant="h1"
            color="white"
            sx={({ breakpoints, typography: { size } }: any) => ({
              [breakpoints.down("md")]: { fontSize: size["3xl"] },
              fontWeight: 800,
              letterSpacing: 0.2,
            })}
          >
            Каталог продуктов
          </MKTypography>

          <MKTypography
            variant="body1"
            color="white"
            opacity={0.9}
            mt={1}
            mb={0}
            maxWidth={560}
          >
            100% натуральный продукт. Мы заботимся о здоровье ваших питомцев
            вместе.
          </MKTypography>

          {isMobile && (
            <Stack direction="row" spacing={2} mt={3}>
              <MKButton
                onClick={handleToggleFilters}
                variant="contained"
                sx={{ borderRadius: 2, minWidth: "auto", p: 1 }}
                startIcon={<FilterAltIcon />}
              >
                Фильтры
              </MKButton>
              <ProductFilterSidebar
                open={openFiltersBar}
                onClose={handleToggleFilters}
                variant="temporary"
              />
            </Stack>
          )}
        </Container>
      </MKBox>

      <Card
        sx={(theme) => ({
          mx: { xs: 2, lg: 3 },
          mt: { xs: -4, md: -6 },
          mb: 4,
          borderRadius: 3,
          boxShadow: (theme as any).boxShadows.xl,
          position: "relative",
          zIndex: 2,
        })}
      >
        <Container sx={{ py: 3 }}>
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
