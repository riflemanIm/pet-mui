// theme/components/svgIcon.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

export function getSvgIconComponents(theme: Theme): Components["MuiSvgIcon"] {
  return {
    styleOverrides: {
      root: {
        fontSize: pxToRem(theme.customSizes.md),
      } as CSSObject,
      fontSizeSmall: {
        fontSize: pxToRem(theme.customSizes.sm),
      } as CSSObject,
      fontSizeLarge: {
        fontSize: pxToRem(theme.customSizes.lg),
      } as CSSObject,
    },
  };
}
