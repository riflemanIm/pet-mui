// theme/components/button/contained.ts
import { alpha, Theme } from "@mui/material";
import pxToRem from "theme/functions/pxToRem";

/** Given a fully-built `theme`, return the CSS for the `contained` slot. */
export function getContainedStyles(theme: Theme) {
  return {
    root: {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      minHeight: pxToRem(40),
      padding: `${pxToRem(10)} ${pxToRem(24)}`,
      transition: "all 150ms ease-in",
      "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.8) },
      "&:active": { opacity: 0.85 },
      "&.Mui-disabled": { pointerEvents: "none", opacity: 0.65 },
      "& .material-icons, .material-icons-round, svg": {
        fontSize: `${pxToRem(16)} !important`,
      },
    },
    sizeSmall: {
      minHeight: pxToRem(32),
      padding: `${pxToRem(6)} ${pxToRem(16)}`,
      fontSize: theme.typography.fontSize,
      "& .material-icons, .material-icons-round, svg": {
        fontSize: `${pxToRem(12)} !important`,
      },
    },
    sizeLarge: {
      minHeight: pxToRem(47),
      padding: `${pxToRem(12)} ${pxToRem(28)}`,
      fontSize: theme.typography.fontSize,
      "& .material-icons, .material-icons-round, svg": {
        fontSize: `${pxToRem(22)} !important`,
      },
    },
    primary: {
      backgroundColor: theme.palette.primary.main,
      "&:hover": { backgroundColor: alpha(theme.palette.primary.main, 0.8) },
    },
    secondary: {
      backgroundColor: theme.palette.secondary.main,
      "&:hover": { backgroundColor: alpha(theme.palette.secondary.main, 0.8) },
    },
  };
}
