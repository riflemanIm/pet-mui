import React from "react";
import { useRecoilValue } from "recoil";
//import PropTypes from "prop-types";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { alpha, Badge, IconButton } from "@mui/material";
import { shoppingCartState } from "../../../../../atoms";

const ShoppingCartButton = () => {
  const shoppingCart = useRecoilValue(shoppingCartState);

  const total = shoppingCart.reduce(
    (a, { quantityInCart }) => quantityInCart + a,
    0
  );
  return (
    <IconButton
      aria-haspopup="true"
      aria-controls="mail-menu"
      //onClick={handleOpenMenu}
      //className={classes.headerMenuButton}
      component="a"
      href="/cart"
      size="large"
      color="primary"
      sx={{
        backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.08),
        "&:hover": {
          backgroundColor: (theme) => alpha(theme.palette.primary.main, 0.16),
        },
      }}
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
