// theme/components/button/text.ts
import { Theme } from "@mui/material";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

/**
 * Generate style overrides for text button variants.
 * @param theme - The MUI theme object
 * @returns An object with CSSObject entries for each slot
 */
export function getTextStyles(theme: Theme): {
  root: CSSObject;
  sizeSmall: CSSObject;
  sizeLarge: CSSObject;
  primary: CSSObject;
  secondary: CSSObject;
} {
  return {
    root: {
      backgroundColor: "transparent",
      minHeight: pxToRem(40),
      color: theme.palette.text.primary,
      boxShadow: "none",
      padding: `${pxToRem(10)} ${pxToRem(24)}`,

      "&:hover": {
        backgroundColor: "transparent",
        boxShadow: "none",
      },

      "&:focus": { boxShadow: "none" },

      "&:active, &:active:focus, &:active:hover": {
        opacity: 0.85,
        boxShadow: "none",
      },

      "&:disabled": { boxShadow: "none" },

      "& .material-icons, .material-icons-round, svg": {
        fontSize: `${pxToRem(16)} !important`,
      },
    },
    sizeSmall: {
      minHeight: pxToRem(32),
      padding: `${pxToRem(6)} ${pxToRem(16)}`,
      fontSize: pxToRem(12),

      "& .material-icons, .material-icons-round, svg": {
        fontSize: `${pxToRem(12)} !important`,
      },
    },
    sizeLarge: {
      minHeight: pxToRem(47),
      padding: `${pxToRem(12)} ${pxToRem(28)}`,
      fontSize: pxToRem(14),

      "& .material-icons, .material-icons-round, svg": {
        fontSize: `${pxToRem(22)} !important`,
      },
    },
    primary: {
      color: theme.palette.info.main,
      "&:hover": { color: theme.palette.info.main },
      "&:focus:not(:hover)": {
        color: theme.palette.info.main,
        boxShadow: "none",
      },
    },
    secondary: {
      color: theme.palette.secondary.main,
      "&:hover": { color: theme.palette.secondary.main },
      "&:focus:not(:hover)": {
        color: theme.palette.secondary.main,
        boxShadow: "none",
      },
    },
  };
}
