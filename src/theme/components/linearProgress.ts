// theme/components/linearProgress.ts
import { Components, Theme } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";

export function getLinearProgressComponents(
  theme: Theme
): Components["MuiLinearProgress"] {
  return {
    styleOverrides: {
      root: {
        height: pxToRem(6),
        borderRadius: theme.borders.borderRadius.md,
        overflow: "visible",
        position: "relative",
      },
      colorPrimary: { backgroundColor: theme.palette.light.main },
      colorSecondary: { backgroundColor: theme.palette.light.main },
      bar: {
        height: pxToRem(6),
        borderRadius: theme.borders.borderRadius.sm,
        position: "absolute",
        transform: "translate(0, 0) !important",
        transition: "width 0.6s ease !important",
      },
    },
  };
}
