// theme/components/tooltip.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";

export function getTooltipComponents(theme: Theme): Components["MuiTooltip"] {
  return {
    styleOverrides: {
      tooltip: {
        backgroundColor: theme.palette.dark.main,
        color: theme.palette.common.white,
        fontSize: theme.typography.fontSize,
        borderRadius: theme.borders.borderRadius.sm,
        padding: "8px 12px",
      } as CSSObject,
      arrow: {
        color: theme.palette.dark.main,
      } as CSSObject,
    },
  };
}
