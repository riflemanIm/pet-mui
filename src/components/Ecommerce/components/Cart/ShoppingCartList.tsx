import * as React from "react";
import { useRouter } from "next/navigation";
import { useRecoilState } from "recoil";
import { currentUserState, shoppingCartState } from "atoms";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useSnackbar } from "notistack";

import {
  calcCartItemSum,
  calcCartItemTotalPrice,
  currencyFormat,
} from "helpers/utils";
import ShoppingCartListItem from "./ShoppingCartListItem";
import {
  Alert,
  Button,
  Card,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import { buyFood } from "actions/food";

export default function ShoppingCartList() {
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);
  const [currentUser] = useRecoilState(currentUserState);
  const [loading, setLoading] = React.useState(false);

  const { enqueueSnackbar } = useSnackbar();

  console.log("shoppingCart", shoppingCart);
  console.log("currentUser", currentUser);
  const router = useRouter();
  const handleBuyClick = async () => {
    if (currentUser?.id == null) {
      enqueueSnackbar("Пожалуйста авторизуйтесь", { variant: "error" });
      router.push("/signin");
      return;
    }

    const data = shoppingCart.map((item) => ({
      foodId: parseInt(item.id),
      quality: item.quantityInCart,
    }));

    const params = { userId: currentUser.id, data };
    setLoading(true);
    const response = await buyFood(params);
    console.log("response", response);
    if (response.error) {
      enqueueSnackbar(`Error: ${response.error}.`, {
        variant: "error",
      });
      setLoading(false);
      return;
    }
    enqueueSnackbar(`${response.content?.message}`, {
      variant: "success",
    });
    setLoading(false);
  };

  function handleSetEmptyCart() {
    setShoppingCart([]);
    window.localStorage.removeItem("card");
  }

  return (
    <>
      <Typography
        variant="h4"
        data-aos={"fade-up"}
        gutterBottom
        sx={{
          fontWeight: 700,
        }}
        mb={3}
      >
        Корзина
      </Typography>
      <Grid container spacing={0}>
        <Grid item md={9} sm={12}>
          {!!shoppingCart.length && (
            <Grid container spacing={2}>
              {shoppingCart.map((cartItem) => (
                <ShoppingCartListItem key={cartItem.id} {...cartItem} />
              ))}
            </Grid>
          )}
          <Grid item xs={12} textAlign="center">
            {!!shoppingCart.length && (
              <Button
                size="large"
                variant="outlined"
                startIcon={<RemoveShoppingCartIcon />}
                onClick={handleSetEmptyCart}
              >
                Очистить корзину
              </Button>
            )}
            {!shoppingCart.length && (
              <Alert severity="warning">
                <Typography variant="subtitle1">Ваша корзина пуста</Typography>
              </Alert>
            )}
          </Grid>
        </Grid>

        {!!shoppingCart.length && (
          <Grid item md={3} sm={12}>
            <SubTotal
              sum={calcCartItemSum(shoppingCart)}
              price={calcCartItemTotalPrice(shoppingCart)}
              handleBuyClick={handleBuyClick}
            />
          </Grid>
        )}
      </Grid>
    </>
  );
}

const SubTotal = (props: {
  sum: number;
  price: number;
  handleBuyClick: () => void;
}) => {
  const { sum, price, handleBuyClick } = props;

  return (
    <Card sx={{ p: 2 }}>
      <CardContent>
        <Typography
          variant="subtitle1"
          color="text.secondary"
          sx={{ width: "100%" }}
        >
          Всего товаров:
          <Typography
            variant="subtitle1"
            color="text.primary"
            fontWeight="bold"
            component="span"
          >
            {sum}
          </Typography>
        </Typography>

        <Typography variant="subtitle1" color="text.secondary">
          Общая стоимость:{" "}
        </Typography>
        <Typography
          sx={{ width: 15 }}
          variant="h6"
          fontWeight="bold"
          color="secondary"
        >
          {currencyFormat(price)}₽
        </Typography>
      </CardContent>
      <CardActions>
        <Button
          size="large"
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleBuyClick}
        >
          Оформить заказ
        </Button>
      </CardActions>
    </Card>
  );
};
