// theme/components/menu/index.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

/**
 * Generate style overrides for MuiMenu component.
 * @param theme - The MUI theme object
 * @returns Components['MuiMenu'] override configuration
 */
export function getMenuComponents(theme: Theme): Components["MuiMenu"] {
  const paperStyles: CSSObject = {
    minWidth: pxToRem(160),
    boxShadow: theme.boxShadows.lg,
    padding: `${pxToRem(16)} ${pxToRem(8)}`,
    fontSize: pxToRem(theme.customSizes.sm),
    color: theme.palette.text.primary,
    textAlign: "left",
    backgroundColor: `${theme.palette.common.white} !important`,
    borderRadius: theme.shape.borderRadius,
  };

  return {
    defaultProps: {
      disableAutoFocusItem: true,
    },
    styleOverrides: {
      paper: paperStyles,
    },
  };
}
