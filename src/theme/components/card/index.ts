// theme/components/card/index.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import { alpha } from "@mui/material";

/**
 * Generate style overrides for MuiCard component.
 * @param theme - The MUI theme object
 * @returns Components['MuiCard'] override configuration
 */
export function getCardComponents(theme: Theme): Components["MuiCard"] {
  const rootStyles: CSSObject = {
    display: "flex",
    flexDirection: "column",
    position: "relative",
    minWidth: 0,
    wordWrap: "break-word",
    backgroundColor: theme.palette.common.white,
    backgroundClip: "border-box",
    border: `1px solid ${alpha(theme.palette.common.black, 0.125)}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.boxShadows.md,
    overflow: "visible",
  };

  return {
    styleOverrides: {
      root: rootStyles,
    },
  };
}
