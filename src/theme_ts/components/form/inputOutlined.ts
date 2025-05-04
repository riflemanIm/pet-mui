// theme/components/form/inputOutlined.ts
import { Components, Theme } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";

export function getOutlinedInputComponents(
  theme: Theme
): Components["MuiOutlinedInput"] {
  return {
    styleOverrides: {
      root: {
        backgroundColor: theme.palette.background.paper,
        fontSize: pxToRem(theme.customSizes.sm),
        borderRadius: theme.shape.borderRadius,
        "&:hover .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.divider,
        },
        "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
          borderColor: theme.palette.info.main,
        },
      },
      notchedOutline: { borderColor: theme.palette.divider },
      input: { color: theme.palette.text.secondary, padding: pxToRem(12) },
      inputSizeSmall: {
        fontSize: pxToRem(theme.customSizes.xs),
        padding: pxToRem(10),
      },
      multiline: { color: theme.palette.text.secondary, padding: 0 },
    },
  };
}
