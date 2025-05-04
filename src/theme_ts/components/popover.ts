// theme/components/popover.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";

export function getPopoverComponents(theme: Theme): Components["MuiPopover"] {
  return {
    styleOverrides: {
      paper: {
        boxShadow: theme.boxShadows.md,
        borderRadius: theme.borders.borderRadius.lg,
      } as CSSObject,
    },
  };
}
