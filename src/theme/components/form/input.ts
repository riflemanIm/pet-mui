// theme/components/form/input.ts
import { Components, Theme } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";

export function getInputComponents(theme: Theme): Components["MuiInput"] {
  const bw = theme.borders.borderWidth;
  return {
    styleOverrides: {
      root: {
        fontSize: pxToRem(theme.customSizes.sm),
        color: theme.palette.text.primary,
        "&:hover:not(.Mui-disabled):before": {
          borderBottom: `${bw.thin} solid ${theme.palette.divider}`,
        },
        "&:before": { borderColor: theme.palette.divider },
        "&:after": { borderColor: theme.palette.info.main },
      },
    },
  };
}
