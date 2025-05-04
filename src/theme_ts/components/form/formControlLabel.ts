// theme/components/form/formLabel.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

/**
 * Generate style overrides for MuiFormControlLabel (label slot) component.
 * @param theme - The MUI theme object
 * @returns Components['MuiFormControlLabel'] override configuration
 */
export function getFormControlLabelComponents(
  theme: Theme
): Components["MuiFormControlLabel"] {
  const darkMain = theme.palette.primary.dark;

  const rootStyles: CSSObject = {
    display: "block",
    minHeight: pxToRem(24),
    marginBottom: pxToRem(2),
  };

  const labelStyles: CSSObject = {
    display: "inline-block",
    fontSize: pxToRem(theme.customSizes.sm),
    fontWeight: theme.typography.fontWeightBold,
    color: darkMain,
    lineHeight: 1,
    transform: `translateY(${pxToRem(1)})`,
    marginLeft: pxToRem(4),
    "&.Mui-disabled": {
      color: theme.palette.text.disabled,
    },
  };

  return {
    styleOverrides: {
      root: rootStyles,
      label: labelStyles,
    },
  };
}
