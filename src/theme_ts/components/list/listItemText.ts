// theme/components/list/listItemText.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

/**
 * Generate style overrides for MuiListItemText component.
 */
export function getListItemTextComponents(
  theme: Theme
): Components["MuiListItemText"] {
  const primaryStyles: CSSObject = {
    margin: 0,
    fontSize: pxToRem(theme.customSizes.md),
    fontWeight: theme.typography.fontWeightMedium,
  };
  const secondaryStyles: CSSObject = {
    margin: 0,
    fontSize: pxToRem(theme.customSizes.sm),
    color: theme.palette.text.secondary,
  };

  return {
    styleOverrides: {
      primary: primaryStyles,
      secondary: secondaryStyles,
    },
  };
}
