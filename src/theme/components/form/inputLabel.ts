// theme/components/form/inputLabel.ts
import { Components, Theme } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";

export function getInputLabelComponents(
  theme: Theme
): Components["MuiInputLabel"] {
  return {
    styleOverrides: {
      root: {
        fontSize: pxToRem(theme.customSizes.sm),
        color: theme.palette.text.primary,
        lineHeight: 0.9,
        "&.Mui-focused": { color: theme.palette.info.main },
        "&.MuiInputLabel-shrink": {
          lineHeight: 1.5,
          fontSize: pxToRem(theme.customSizes.md),
          "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": {
            fontSize: "0.85em",
          },
        },
      },
      sizeSmall: {
        fontSize: pxToRem(theme.customSizes.xs),
        lineHeight: 1.625,
        "&.MuiInputLabel-shrink": {
          lineHeight: 1.6,
          fontSize: pxToRem(theme.customSizes.sm),
          "~ .MuiInputBase-root .MuiOutlinedInput-notchedOutline legend": {
            fontSize: "0.72em",
          },
        },
      },
    },
  };
}
