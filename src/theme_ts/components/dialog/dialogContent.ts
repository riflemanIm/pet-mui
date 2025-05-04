// theme/components/dialog/dialogContent.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

export function getDialogContentComponents(
  theme: Theme
): Components["MuiDialogContent"] {
  const { borderWidth } = theme.borders;
  const borderColor = theme.palette.divider || theme.palette.grey[200];

  const rootStyles: CSSObject = {
    padding: pxToRem(16),
    fontSize: theme.typography.fontSize,
    color: theme.palette.text.primary,
  };

  const dividersStyles: CSSObject = {
    borderTop: `${borderWidth.sm} solid ${borderColor}`,
    borderBottom: `${borderWidth.sm} solid ${borderColor}`,
  };

  return {
    styleOverrides: {
      root: rootStyles,
      dividers: dividersStyles,
    },
  };
}
