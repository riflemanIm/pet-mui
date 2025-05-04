// theme/components/dialog/dialogContentText.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";

export function getDialogContentTextComponents(
  theme: Theme
): Components["MuiDialogContentText"] {
  const rootStyles: CSSObject = {
    fontSize: theme.typography.fontSize,
    color: theme.palette.text.primary,
  };

  return {
    styleOverrides: {
      root: rootStyles,
    },
  };
}
