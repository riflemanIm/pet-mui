import * as React from "react";
import { useRouter } from "next/navigation";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import { useSnackbar } from "notistack";

import { calcCartItemSum, calcCartItemTotalPrice } from "helpers/utils";
import ShoppingCartListItem from "./ShoppingCartListItem";
import { Alert, Button, Grid2, Typography } from "@mui/material";
import { buyFood } from "actions/food";
import { useAppState } from "context/AppStateContext";
import SubTotal from "./SubTotal";

export default function ShoppingCartList() {
  const { shoppingCart, currentUser, clearCart } = useAppState();
  const [buy, setBuy] = React.useState<{ loading: boolean }>({
    loading: false,
  });
  const [orderAlert, setOrderAlert] = React.useState<{
    severity: "success" | "error";
    message: string;
  } | null>(null);

  const { enqueueSnackbar } = useSnackbar();

  const router = useRouter();
  const hasItems = shoppingCart.length > 0;

  const handleBuyClick = async () => {
    if (currentUser?.id == null) {
      const message = "Пожалуйста, авторизуйтесь перед оформлением заказа.";
      enqueueSnackbar(message, { variant: "error" });
      setOrderAlert({ severity: "error", message });
      router.push("/signin");
      return;
    }

    const data = shoppingCart.map((item) => ({
      foodId: Number(item.id),
      quantityInCart: item.quantityInCart,
    }));

    const params = { token: currentUser.token, data };
    setBuy({ loading: true });
    setOrderAlert(null);

    const response = await buyFood(params);
    if (response.error) {
      enqueueSnackbar(response.error, {
        variant: "error",
      });
      setBuy({ loading: false });
      setOrderAlert({
        severity: "error",
        message:
          "Не удалось оформить заказ. Проверьте данные корзины и попробуйте снова.",
      });
      return;
    }
    const successMessage =
      "Ваш заказ успешно оформлен. Спасибо, что выбрали Shepherd. Мы уже передали заказ в обработку и скоро свяжемся с вами для подтверждения деталей.";
    enqueueSnackbar(successMessage, {
      variant: "success",
    });
    setOrderAlert({
      severity: "success",
      message: successMessage,
    });
    setBuy({ loading: false });
    clearCart();
  };

  function handleSetEmptyCart() {
    clearCart();
  }

  return (
    <>
      {orderAlert && (
        <Alert severity={orderAlert.severity} sx={{ mb: 2 }}>
          <Typography variant="subtitle2">{orderAlert.message}</Typography>
        </Alert>
      )}
      <Grid2 container spacing={2}>
        <Grid2 size={{ xs: 12, md: 9 }}>
          {hasItems && (
            <Grid2 container spacing={1.5}>
              {shoppingCart.map((cartItem) => (
                <ShoppingCartListItem key={cartItem.id} {...cartItem} />
              ))}
            </Grid2>
          )}
          <Grid2 size={12} textAlign="center" mt={2} mb={1}>
            {hasItems && (
              <Button
                size="large"
                variant="outlined"
                startIcon={<RemoveShoppingCartIcon />}
                onClick={handleSetEmptyCart}
                disabled={buy.loading}
              >
                Очистить корзину
              </Button>
            )}
            {!hasItems && orderAlert == null && (
              <Alert severity="info">
                <Typography variant="subtitle1">Ваша корзина пуста</Typography>
              </Alert>
            )}
          </Grid2>
        </Grid2>

        {hasItems && (
          <Grid2 size={{ xs: 12, md: 3 }}>
            <SubTotal
              sum={calcCartItemSum(shoppingCart)}
              price={calcCartItemTotalPrice(shoppingCart)}
              loading={buy.loading}
              handleBuyClick={handleBuyClick}
            />
          </Grid2>
        )}
      </Grid2>
    </>
  );
}
