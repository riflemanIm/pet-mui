import React from "react";
import PropTypes from "prop-types";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import ProductFilter from "./ProductFilter";
const ProductFilterSidebar = ({ open, variant, onClose }) => {
  const theme = useTheme();
  return (
    <Drawer
      anchor="right"
      onClose={() => onClose()}
      open={open}
      variant={variant}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: { xs: 256, sm: 400 },
          top: { xs: 0, md: 81 },
          height: { xs: "100%" },
          background: theme.palette.alternate.main,
        },
      }}
    >
      <ProductFilter />
    </Drawer>
  );
};

ProductFilterSidebar.propTypes = {
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

export default ProductFilterSidebar;
