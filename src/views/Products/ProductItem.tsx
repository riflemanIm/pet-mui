// ProductItem.tsx
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Card, Chip, IconButton } from "@mui/material";
import Grid2 from "@mui/material/Grid2";
import NextLink from "next/link";
import { useRouter } from "next/router";
import { useSnackbar } from "notistack";
import { useCallback } from "react";
import HandCounter from "components/HandCounter";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { useAppState } from "context/AppStateContext";
import borders from "theme/base/borders";
import boxShadows from "theme/base/boxShadows";
import type { FoodProps } from "types";
const { borderRadius } = borders;
const { colored } = boxShadows;

type Props = { item: FoodProps; index: number };

export default function ProductItem({ item, index }: Props) {
  const router = useRouter();
  const { shoppingCart, addCartItem } = useAppState();
  const { enqueueSnackbar } = useSnackbar();
  const detailsHref = {
    pathname: `/catalog/${item.id}`,
    query: { returnTo: router.asPath },
  } as const;

  const handleOpenDetails = useCallback(() => {
    router.push({
      pathname: `/catalog/${item.id}`,
      query: { returnTo: router.asPath },
    });
  }, [router, item.id]);

  const handleAddToCart = useCallback(() => {
    addCartItem(item, enqueueSnackbar);
  }, [item, addCartItem, enqueueSnackbar]);

  const inCart = shoppingCart.some((c) => c.id === item.id);

  const mainImg = item.img
    ? `/images/catalog/${item.img}`
    : "/images/no-image.png";
  const price =
    typeof item.price === "number" ? item.price : Number(item.price);

  return (
    <Grid2
      size={{ xs: 12, sm: 12, md: 12, lg: 6, xl: 4 }}
      key={item.id}
      sx={{ display: "flex" }}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-offset={100}
      data-aos-duration={600}
    >
      <Card
        onClick={handleOpenDetails}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            handleOpenDetails();
          }
        }}
        sx={{
          borderRadius: borderRadius.lg,
          boxShadow: colored.light,
          width: "100%",
          minWidth: { xs: 0, sm: 280, md: 320, lg: 252, xl: 252 },
          display: "flex",
          flexDirection: "column",
          height: "100%",
          cursor: "pointer",
          overflow: "hidden",
        }}
      >
        <MKBox
          position="relative"
          sx={{
            height: { xs: 240, sm: 250, md: 250 },
            bgcolor: "grey.100",
            flexShrink: 0,
          }}
        >
          <MKBox
            component="img"
            src={mainImg}
            alt={item.title || ""}
            width="100%"
            sx={{
              height: "100%",
              objectFit: "cover",
            }}
          />
          <MKBox
            position="absolute"
            bottom={0}
            left={0}
            right={0}
            sx={{
              height: "40%",
              background:
                "linear-gradient(180deg, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)",
            }}
          />
          <IconButton
            size="small"
            sx={{
              position: "absolute",
              top: 10,
              right: 10,
              bgcolor: "rgba(255,255,255,0.86)",
              "&:hover": { bgcolor: "rgba(255,255,255,0.96)" },
            }}
          >
            <FavoriteBorderIcon fontSize="small" />
          </IconButton>
        </MKBox>

        <MKBox
          p={2}
          bgcolor="background.paper"
          sx={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            minHeight: 152,
          }}
        >
          <MKTypography
            component={NextLink}
            href={detailsHref}
            onClick={(e) => e.stopPropagation()}
            variant="h6"
            textTransform="capitalize"
            sx={{
              textDecoration: "none",
              color: "text.primary",
              display: "-webkit-box",
              WebkitLineClamp: 2,
              WebkitBoxOrient: "vertical",
              overflow: "hidden",
              minHeight: 52,
              fontWeight: 700,
            }}
          >
            {item.title || "Без названия"}
          </MKTypography>

          <MKBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={1.5}
            gap={1}
            onClick={(e) => e.stopPropagation()}
          >
            <MKTypography variant="h6" color="text.primary" fontWeight={800}>
              {price}₽
            </MKTypography>
            <Chip
              size="small"
              label={item.stock > 0 ? "В наличии" : "Нет в наличии"}
              color={item.stock > 0 ? "success" : "default"}
              variant="outlined"
            />
          </MKBox>

          {item.stock > 0 && (
            <MKBox mt="auto" pt={1} onClick={(e) => e.stopPropagation()}>
              {inCart ? (
                <HandCounter id={item.id} />
              ) : (
                <MKButton
                  variant="gradient"
                  size="small"
                  fullWidth
                  onClick={handleAddToCart}
                >
                  В корзину
                </MKButton>
              )}
            </MKBox>
          )}
        </MKBox>
      </Card>
    </Grid2>
  );
}
