// theme/components/button/index.ts
import { getButtonRootStyles } from "./root";
import { getContainedStyles } from "./contained";
import { getOutlinedStyles } from "./outlined";
import { getTextStyles } from "./text";
import { Components, Theme } from "@mui/material/styles";

/**
 * Generate the MuiButton component override object for a given theme.
 * @param theme - The MUI theme object
 * @returns Components["MuiButton"] override configuration
 */
export function getButtonComponents(theme: Theme): Components["MuiButton"] {
  const contained = getContainedStyles(theme);
  const outlined = getOutlinedStyles(theme);
  const text = getTextStyles(theme);
  const root = getButtonRootStyles(theme);

  return {
    defaultProps: { disableRipple: false },
    styleOverrides: {
      root,
      // Contained variant
      contained: contained.root,
      containedSizeSmall: contained.sizeSmall,
      containedSizeLarge: contained.sizeLarge,
      containedPrimary: contained.primary,
      containedSecondary: contained.secondary,

      // Outlined variant
      outlined: outlined.root,
      outlinedSizeSmall: outlined.sizeSmall,
      outlinedSizeLarge: outlined.sizeLarge,
      outlinedPrimary: outlined.primary,
      outlinedSecondary: outlined.secondary,

      // Text variant
      text: text.root,
      textSizeSmall: text.sizeSmall,
      textSizeLarge: text.sizeLarge,
      textPrimary: text.primary,
      textSecondary: text.secondary,
    },
  };
}
