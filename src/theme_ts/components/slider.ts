// theme/components/slider.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

export function getSliderComponents(theme: Theme): Components["MuiSlider"] {
  const grey400 = theme.palette.grey[400];
  return {
    styleOverrides: {
      root: {
        color: theme.palette.primary.main,
        height: pxToRem(4),
        padding: `${pxToRem(15)} 0`,
      } as CSSObject,
      thumb: {
        width: pxToRem(12),
        height: pxToRem(12),
        backgroundColor: theme.palette.common.white,
        border: `${pxToRem(2)} solid ${grey400}`,
        "&:hover": { boxShadow: theme.boxShadows.sm },
      } as CSSObject,
      track: {
        height: pxToRem(4),
        borderRadius: theme.borders.borderRadius.sm,
      } as CSSObject,
      rail: {
        height: pxToRem(4),
        borderRadius: theme.borders.borderRadius.sm,
      } as CSSObject,
      mark: {
        backgroundColor: grey400,
      } as CSSObject,
      markActive: {
        opacity: 1,
        backgroundColor: theme.palette.primary.main,
      } as CSSObject,
    },
  };
}
