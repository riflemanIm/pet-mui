// theme/components/list/index.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

/**
 * Generate style overrides for MuiList component.
 * @param theme - The MUI theme object
 * @returns Components['MuiList'] override configuration
 */
export function getListComponents(theme: Theme): Components["MuiList"] {
  const rootStyles: CSSObject = {
    margin: 0,
    padding: 0,
    listStyle: "none",
  };

  return {
    styleOverrides: {
      root: rootStyles,
    },
  };
}
