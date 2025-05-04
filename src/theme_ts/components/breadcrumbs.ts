// theme/components/breadcrumbs.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

export function getBreadcrumbsComponents(
  theme: Theme
): Components["MuiBreadcrumbs"] {
  return {
    styleOverrides: {
      li: (): CSSObject => ({ lineHeight: 0 }),
      separator: {
        fontSize: pxToRem(theme.customSizes.sm),
        color: theme.palette.grey[600],
      },
    },
  };
}
