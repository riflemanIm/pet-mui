// theme/components/card/cardMedia.ts
import { Components } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";
import { Theme } from "@mui/material/styles";

const cardMediaComponents: Components["MuiCardMedia"] = {
  styleOverrides: {
    root: {
      borderRadius: pxToRem(0), // fallback if needed
      margin: `${pxToRem(16)} ${pxToRem(16)} 0`,
    } as CSSObject,
    media: {
      width: "auto",
    } as CSSObject,
  },
};

export default cardMediaComponents;
