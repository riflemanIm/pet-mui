import { Button, Card, CardActions, CardContent, Typography } from "@mui/material";
import { currencyFormat } from "helpers/utils";

type Props = {
  sum: number;
  price: number;
  loading?: boolean;
  handleBuyClick: () => void;
};

export default function SubTotal({
  sum,
  price,
  loading = false,
  handleBuyClick,
}: Props) {
  return (
    <Card sx={{ p: 1.5, borderRadius: 2 }}>
      <CardContent>
        <Typography variant="subtitle1" color="text.secondary">
          Всего товаров:{" "}
          <Typography
            variant="subtitle1"
            color="text.primary"
            fontWeight="bold"
            component="span"
          >
            {sum}
          </Typography>
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" mt={1}>
          Общая стоимость:
        </Typography>
        <Typography variant="h5" fontWeight="bold" color="secondary.main">
          {currencyFormat(price)}₽
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="large"
          variant="contained"
          sx={{ width: "100%" }}
          onClick={handleBuyClick}
          disabled={loading}
        >
          {loading ? "Оформляем..." : "Оформить заказ"}
        </Button>
      </CardActions>
    </Card>
  );
}
