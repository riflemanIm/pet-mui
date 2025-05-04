// theme/components/stepper/index.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";
import linearGradient from "theme/functions/linearGradient";

/**
 * Generate style overrides for MuiStepper component.
 */
export function getStepperComponents(theme: Theme): Components["MuiStepper"] {
  const rootStyles: CSSObject = {
    background: linearGradient(
      theme.palette.gradients.info.main,
      theme.palette.gradients.info.state
    ),
    padding: `${pxToRem(24)} 0 ${pxToRem(16)}`,
    borderRadius: theme.shape.borderRadius,
    boxShadow: theme.boxShadows.xl,
    "&.MuiPaper-root": {
      backgroundColor: theme.palette.transparent?.main || "transparent",
    },
  };

  return {
    styleOverrides: {
      root: rootStyles,
    },
  };
}
