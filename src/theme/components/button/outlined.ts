// theme/components/button/outlined.ts
import { Theme } from "@mui/material";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

/**
 * Generate style overrides for outlined button variants.
 * @param theme - The MUI theme object
 * @returns An object with CSSObject entries for each slot
 */
export function getOutlinedStyles(theme: Theme): {
  root: CSSObject;
  sizeSmall: CSSObject;
  sizeLarge: CSSObject;
  primary: CSSObject;
  secondary: CSSObject;
} {
  return {
    root: {
      minHeight: pxToRem(40),
      color: theme.palette.text.primary,
      borderColor: theme.palette.text.primary,
      padding: `${pxToRem(10)} ${pxToRem(24)}`,

      "&:hover": {
        opacity: 0.75,
        backgroundColor: "transparent",
      },

      "& .material-icons, .material-icons-round, svg": {
        fontSize: `${pxToRem(16)} !important`,
      },
    },
    sizeSmall: {
      minHeight: pxToRem(32),
      padding: `${pxToRem(6)} ${pxToRem(16)}`,
      fontSize: pxToRem(14),

      "& .material-icons, .material-icons-round, svg": {
        fontSize: `${pxToRem(12)} !important`,
      },
    },
    sizeLarge: {
      minHeight: pxToRem(47),
      padding: `${pxToRem(12)} ${pxToRem(28)}`,
      fontSize: pxToRem(16),

      "& .material-icons, .material-icons-round, svg": {
        fontSize: `${pxToRem(22)} !important`,
      },
    },
    primary: {
      backgroundColor: "transparent",
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
    secondary: {
      backgroundColor: "transparent",
      borderColor: theme.palette.secondary.main,
      color: theme.palette.secondary.main,
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  };
}
