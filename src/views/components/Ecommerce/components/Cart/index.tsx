import React, { FC } from "react";
import Main from "layouts/Main";
import Container from "../../../Container";
import ShoppingCartList from "./ShoppingCartList";

const Cart: FC = () => {
  return (
    <Main>
      <Container>
        <ShoppingCartList />
      </Container>
    </Main>
  );
};

export default Cart;
