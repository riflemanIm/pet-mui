// theme/components/menu/menuItem.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

/**
 * Generate style overrides for MuiMenuItem component.
 * @param theme - The MUI theme object
 * @returns Components['MuiMenuItem'] override configuration
 */
export function getMenuItemComponents(theme: Theme): Components["MuiMenuItem"] {
  const rootStyles: CSSObject = {
    minWidth: pxToRem(160),
    minHeight: "unset",
    padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
    borderRadius: theme.shape.borderRadius,
    fontSize: pxToRem(theme.customSizes.sm),
    color: theme.palette.text.primary,
    transition: "background-color 300ms ease, color 300ms ease",
    "&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus":
      {
        backgroundColor: theme.palette.action.hover,
        color: theme.palette.text.primary,
      },
  };

  return {
    styleOverrides: {
      root: rootStyles,
    },
  };
}
