import React from "react";
import { useRecoilValue } from "recoil";
//import PropTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Badge, IconButton } from "@mui/material";
import { shoppingCartState } from "atoms";

const ShoppingCartButton = () => {
  const shoppingCart = useRecoilValue(shoppingCartState);
  console.log("shoppingCart", shoppingCart);
  const total = shoppingCart.reduce((a, { quantity }) => quantity + a, 0);
  return (
    <IconButton
      color="inherit"
      aria-haspopup="true"
      aria-controls="mail-menu"
      //onClick={handleOpenMenu}
      //className={classes.headerMenuButton}
      component="a"
      href="/cart"
    >
      <Badge badgeContent={total} color="warning">
        <ShoppingCartIcon />
      </Badge>
    </IconButton>
  );
};

// ShoppingCartButton.propTypes = {
//   onSidebarOpen: PropTypes.func,
//   pages: PropTypes.object,
//   colorInvert: PropTypes.bool,
// };

export default ShoppingCartButton;
