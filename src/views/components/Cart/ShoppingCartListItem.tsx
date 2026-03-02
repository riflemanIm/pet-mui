import Image from "next/image";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import { ShoppingCartItemProps } from "types";
import { currencyFormat } from "helpers/utils";
import { Card, Chip, Grid2, IconButton, Typography } from "@mui/material";
import HandCounter from "components/HandCounter";
import { useAppState } from "context/AppStateContext";

export default function ShoppingCartListItem(props: ShoppingCartItemProps) {
  const {
    id,
    title,
    type,
    price,
    quantityInCart,
    img,
  } = props;

  const { removeCartItem } = useAppState();
  const imgSrc = img ? `/images/catalog/${img}` : "/images/no-image.png";
  const itemType = type.replaceAll(`_nbsp_`, ` `).replaceAll(`_amp_`, `&`);
  const itemPrice =
    (typeof price === "number" ? price : parseFloat(price)) * quantityInCart;

  return (
    <Grid2 size={12}>
      <Card sx={{ p: { xs: 1.25, sm: 1.5 }, borderRadius: 2 }}>
        <Grid2 container spacing={1.5} alignItems="center">
          <Grid2 size={{ xs: 12, sm: 3, md: 2 }} textAlign="center">
            <Image
              src={imgSrc}
              alt={title ?? "Товар"}
              width={120}
              height={120}
              style={{ borderRadius: 8, objectFit: "cover" }}
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 5, md: 5 }}>
            <Typography variant="subtitle1" fontWeight={600}>
              {title || "Без названия"}
            </Typography>
            <Chip
              size="small"
              label={itemType}
              sx={{ mt: 0.5 }}
              variant="outlined"
            />
          </Grid2>

          <Grid2 size={{ xs: 12, sm: 4, md: 2 }}>
            <HandCounter id={id} />
          </Grid2>

          <Grid2 size={{ xs: 10, sm: 10, md: 2 }}>
            <Typography variant="body1" fontWeight={700}>
              {currencyFormat(itemPrice)}₽
            </Typography>
          </Grid2>

          <Grid2 size={{ xs: 2, sm: 2, md: 1 }} textAlign="right">
            <IconButton
              aria-label="Удалить товар"
              color="primary"
              onClick={() => removeCartItem(id)}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </Grid2>
        </Grid2>
      </Card>
    </Grid2>
  );
}
