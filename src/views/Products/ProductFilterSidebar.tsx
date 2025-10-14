// ProductFilterSidebar.tsx
import React from "react";
import { useTheme } from "@mui/material/styles";
import Drawer from "@mui/material/Drawer";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import ProductFilter from "./ProductFilter";

type Props = {
  open: boolean;
  variant: "temporary" | "persistent" | "permanent";
  onClose: () => void;
};

const ProductFilterSidebar: React.FC<Props> = ({ open, variant, onClose }) => {
  const theme = useTheme();
  return (
    <Drawer
      anchor="right"
      onClose={onClose}
      open={open}
      variant={variant}
      sx={{
        "& .MuiPaper-root": {
          width: "100%",
          maxWidth: { xs: 320, sm: 320, md: 400 },
          top: { xs: 0, md: 81 },
          height: { xs: "100%" },
          background: (theme as any).palette.background.paper,
        },
      }}
    >
      <Box p={3}>
        <Typography
          variant="h6"
          sx={{ fontWeight: "medium" }}
          gutterBottom
          color={"secondary"}
        >
          Фильтры
        </Typography>
        <ProductFilter />
      </Box>
    </Drawer>
  );
};
export default ProductFilterSidebar;
