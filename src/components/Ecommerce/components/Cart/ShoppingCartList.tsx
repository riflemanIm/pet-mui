import * as React from "react";

import { useRecoilState } from "recoil";
import { shoppingCartState } from "atoms";
import { calcCartItemSum, calcCartItemTotalPrice } from "helpers/utils";
import ShoppingCartListItem from "./ShoppingCartListItem";
import { Box, Typography } from "@mui/material";

export default function ShoppingCartList() {
  const [shoppingCart] = useRecoilState(shoppingCartState);
 return (
    <Box>
      {shoppingCart.map((cartItem) => (
        <ShoppingCartListItem key={cartItem.id} {...cartItem} />
      ))}
      {!!shoppingCart.length && (
        <SubTotal
          sum={calcCartItemSum(shoppingCart)}
          price={calcCartItemTotalPrice(shoppingCart)}
        />
      )}
      {!shoppingCart.length && <EmptyCartAlert />}
    </Box>
  );
}

const EmptyCartAlert = () => {
  return (
    <Typography variant="subtitle1">Your shopping cart is empty.</Typography>
  );
};

const SubTotal = (props: { sum: number; price: number }) => {
  const { sum, price } = props;

  return (
    <Box>
      <Typography variant="subtitle1" color="text.secondary">
        {sum === 1 ? `Subtotal: (${sum} item) $` : `Subtotal: (${sum} items) $`}

        {price}
      </Typography>
    </Box>
  );
};
