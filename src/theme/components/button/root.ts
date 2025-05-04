// theme/components/button/root.ts
import { CSSObject } from "@mui/system";
import { Theme } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";

/**
 * Generate style overrides for the Button root slot.
 * @param theme - The MUI theme object
 * @returns CSSObject for the root slot
 */
export function getButtonRootStyles(theme: Theme): CSSObject {
  const { typography, shape } = theme;

  return {
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: pxToRem(typography.htmlFontSize! * 0.75), // xs size approximation
    fontWeight: typography.fontWeightMedium,
    borderRadius: shape.borderRadius,
    padding: `${pxToRem(6.302)} ${pxToRem(16.604)}`,
    lineHeight: 1.4,
    textAlign: "center",
    textTransform: "uppercase",
    userSelect: "none",
    backgroundSize: "150% !important",
    backgroundPositionX: "25% !important",
    transition: "all 150ms ease-in",

    "&:disabled": {
      pointerEvents: "none",
      opacity: 0.65,
    },

    "& .material-icons": {
      fontSize: pxToRem(15),
      marginTop: pxToRem(-2),
    },
  };
}
