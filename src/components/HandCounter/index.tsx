import { useState } from "react";
import { Box, Button, ButtonGroup, Icon, Typography } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import { itemShoppingCartAddQty, itemShoppingCartRemoveQty } from "selectors";
import { useRecoilState } from "recoil";
import { shoppingCartState } from "atoms";
//import isEmpty from "helpers";

interface HandCounterProps {
  id: string;
}

export default function HandCounter({ id }: HandCounterProps) {
  const [shoppingCart, setShoppingCart] = useRecoilState(shoppingCartState);
  const shoppingCartItem = shoppingCart.find((it) => it.id === id);

  if (shoppingCartItem == null) {
    return null;
  }
  const { quantityInCart, stock } = shoppingCartItem;

  return (
    <ButtonGroup
      color="secondary"
      size="small"
      sx={{
        border: 1,
        borderRadius: 2,
        borderColor: ({ palette: { grey } }) => grey[300],
        backgroundColor: "#fff",
      }}
    >
      <Button
        size="small"
        variant="text"
        onClick={() =>
          itemShoppingCartRemoveQty(setShoppingCart, id, quantityInCart)
        }
        disabled={quantityInCart < 1}
      >
        <RemoveIcon />
      </Button>
      <Box m={1}>
        <Typography
          sx={{ width: 15 }}
          variant="h6"
          fontWeight="bold"
          color="secondary"
        >
          {quantityInCart}
        </Typography>
      </Box>
      <Button
        size="small"
        variant="text"
        onClick={() =>
          itemShoppingCartAddQty(setShoppingCart, id, quantityInCart)
        }
        disabled={quantityInCart >= stock}
      >
        <AddIcon />
      </Button>
    </ButtonGroup>
  );
}
