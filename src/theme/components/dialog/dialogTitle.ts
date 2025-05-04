// theme/components/dialog/dialogTitle.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

export function getDialogTitleComponents(
  theme: Theme
): Components["MuiDialogTitle"] {
  const rootStyles: CSSObject = {
    padding: pxToRem(16),
    fontSize: pxToRem(theme.customSizes.xl || theme.typography.fontSize),
  };

  return {
    styleOverrides: {
      root: rootStyles,
    },
  };
}
