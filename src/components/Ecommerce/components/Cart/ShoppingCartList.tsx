import * as React from "react";

import { useRecoilState } from "recoil";
import { shoppingCartState } from "atoms";
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

export default function ShoppingCartList() {
  const [shoppingCart] = useRecoilState(shoppingCartState);
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
          <Grid container spacing={2}>
            {shoppingCart.map((cartItem) => (
              <ShoppingCartListItem key={cartItem.id} {...cartItem} />
            ))}
          </Grid>
        </Grid>
        <Grid item md={3} sm={12}>
          {!!shoppingCart.length && (
            <SubTotal
              sum={calcCartItemSum(shoppingCart)}
              price={calcCartItemTotalPrice(shoppingCart)}
            />
          )}
          {!shoppingCart.length && <EmptyCartAlert />}
        </Grid>
      </Grid>
    </>
  );
}

const EmptyCartAlert = () => {
  return (
    <Alert severity="warning">
      <Typography variant="subtitle1">Ваша корзина пуста</Typography>
    </Alert>
  );
};

const SubTotal = (props: { sum: number; price: number }) => {
  const { sum, price } = props;

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
        <Button size="large" variant="contained" sx={{ width: "100%" }}>
          Оформить заказ
        </Button>
      </CardActions>
    </Card>
  );
};
