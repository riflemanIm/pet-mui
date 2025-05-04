// theme/components/form/formLabel.ts
import { Components, Theme } from "@mui/material/styles";

export function getFormLabelComponents(
  theme: Theme
): Components["MuiFormLabel"] {
  return {
    styleOverrides: {
      root: { color: theme.palette.text.primary },
    },
  };
}
