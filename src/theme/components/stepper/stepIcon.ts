// theme/components/stepper/stepIcon.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";
import boxShadow from "theme/functions/boxShadow";

export function getStepIconComponents(theme: Theme): Components["MuiStepIcon"] {
  const commonStyles: CSSObject = {
    width: pxToRem(13),
    height: pxToRem(13),
    borderRadius: "50%",
    transition: "all 200ms linear",
  };
  return {
    styleOverrides: {
      root: {
        ...commonStyles,
        backgroundColor: theme.palette.info.main,
        fill: theme.palette.info.main,
        stroke: theme.palette.info.main,
        strokeWidth: pxToRem(10),
        zIndex: 99,
        "&.Mui-active, &.Mui-completed": {
          backgroundColor: theme.palette.common.white,
          fill: theme.palette.common.white,
          stroke: theme.palette.common.white,
          boxShadow: boxShadow([0, 0], [0, 2], theme.palette.common.white, 1),
        },
      },
    },
  };
}
