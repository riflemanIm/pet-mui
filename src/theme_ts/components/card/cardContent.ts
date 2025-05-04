// theme/components/card/cardContent.ts
import { Components } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";

export const getCardContentComponents: Components["MuiCardContent"] = {
  styleOverrides: {
    root: {
      marginTop: 0,
      marginBottom: 0,
      padding: `${pxToRem(8)} ${pxToRem(24)} ${pxToRem(24)}`,
    },
  },
};
