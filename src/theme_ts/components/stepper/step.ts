// theme/components/stepper/step.ts
import { Components } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";

export function getStepComponents(): Components["MuiStep"] {
  return {
    styleOverrides: {
      root: {
        padding: `0 ${pxToRem(6)}`,
      },
    },
  };
}
