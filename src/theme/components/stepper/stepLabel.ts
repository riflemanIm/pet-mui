// theme/components/stepper/stepLabel.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";
import rgba from "theme/functions/rgba";

export function getStepLabelComponents(
  theme: Theme
): Components["MuiStepLabel"] {
  const labelStyles: CSSObject = {
    marginTop: `${pxToRem(8)} !important`,
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: pxToRem(theme.customSizes.xs),
    color: theme.palette.info.main,
    textTransform: "uppercase",
    "&.Mui-active, &.Mui-completed": {
      color: `${rgba(theme.palette.common.white, 0.8)} !important`,
      fontWeight: `${theme.typography.fontWeightRegular} !important`,
    },
  };
  return {
    styleOverrides: {
      label: labelStyles,
    },
  };
}
