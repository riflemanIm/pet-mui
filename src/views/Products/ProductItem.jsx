import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import Grid2 from "@mui/material/Grid2";
import Icon from "@mui/material/Icon";
import NextLink from "next/link";
import { useSnackbar } from "notistack";
import { useCallback } from "react";
import { useRecoilState } from "recoil";

import { Card } from "@mui/material";
import { shoppingCartState } from "atoms";
import HandCounter from "components/HandCounter";
import MKBox from "components/MKBox";
import MKButton from "components/MKButton";
import MKTypography from "components/MKTypography";
import { addItemShoppingCart } from "selectors";
import borders from "theme/base/borders";
import boxShadows from "theme/base/boxShadows";
const { borderRadius } = borders;
const { xxl, colored } = boxShadows;

// interface ProductItemProps {
//   item: FoodProps;
//   index: number;
// }

export default function ProductItem({ item, index }) {
  const [cart, setCart] = useRecoilState(shoppingCartState);
  const { enqueueSnackbar } = useSnackbar();

  const handleAddToCart = useCallback(() => {
    addItemShoppingCart(setCart, item, enqueueSnackbar);
  }, [item, setCart, enqueueSnackbar]);

  const inCart = cart.some((c) => c.id === item.id);

  return (
    <Grid2
      size={{ xs: 12, sm: 6, md: 4 }}
      key={item.id}
      data-aos="fade-up"
      data-aos-delay={index * 100}
      data-aos-offset={100}
      data-aos-duration={600}
    >
      <Card
        sx={{
          borderRadius: borderRadius.lg,
          boxShadow: colored.info,
        }}
      >
        {/* Image section */}
        <MKBox position="relative">
          <MKBox
            component="img"
            src={`/images/catalog/${item.img}`}
            alt={item.title}
            width="100%"
            sx={{
              height: { xs: 200, sm: 280, md: 240 },
              borderRadius: borderRadius.lg,
              boxShadow: xxl,
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
          <MKBox component="span" position="absolute" top={8} right={8}>
            <Icon
              component={FavoriteBorderIcon}
              fontSize="small"
              sx={{ color: "white" }}
            />
          </MKBox>
        </MKBox>

        {/* Content section */}
        <MKBox p={2} backgroundColor="background.paper">
          <MKTypography
            component={NextLink}
            href={`/catalog/${item.id}`}
            variant="h6"
            textTransform="capitalize"
            sx={{ textDecoration: "none", color: "text.primary" }}
          >
            {item.title}
          </MKTypography>

          <MKBox
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mt={1}
          >
            <MKTypography variant="subtitle2" color="primary">
              {item.price}₽
            </MKTypography>

            {item.stock > 0 ? (
              inCart ? (
                <HandCounter id={item.id} />
              ) : (
                <MKButton
                  variant="gradient"
                  size="small"
                  onClick={handleAddToCart}
                >
                  В корзину
                </MKButton>
              )
            ) : (
              <MKTypography variant="caption" color="text.secondary">
                Нет в наличии
              </MKTypography>
            )}
          </MKBox>
        </MKBox>
      </Card>
    </Grid2>
  );
}
