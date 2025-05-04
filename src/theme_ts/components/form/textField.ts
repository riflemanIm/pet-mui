// theme/components/form/textField.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

/** Стандартные настройки MuiTextField */
export function getTextFieldComponents(
  theme: Theme
): Components["MuiTextField"] {
  return {
    defaultProps: {
      variant: "outlined",
      size: "medium",
    },
    styleOverrides: {
      root: {} as CSSObject, // при необходимости здесь
    },
  };
}

/** Оверрайды для самого инпута в режиме outlined */
export function getOutlinedInputComponents(
  theme: Theme
): Components["MuiOutlinedInput"] {
  return {
    styleOverrides: {
      input: {
        fontSize: pxToRem(theme.customSizes.sm),
        padding: pxToRem(12),
      } as CSSObject,
      inputSizeSmall: {
        fontSize: pxToRem(theme.customSizes.xs),
        padding: pxToRem(10),
      } as CSSObject,
    },
  };
}
