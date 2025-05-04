// theme/components/table/tableContainer.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";

/**
 * Generate style overrides for MuiTableContainer component.
 */
export function getTableContainerComponents(
  theme: Theme
): Components["MuiTableContainer"] {
  const whiteMain = theme.palette.common.white;

  const rootStyles: CSSObject = {
    backgroundColor: whiteMain,
    boxShadow: theme.boxShadows.md,
    borderRadius: theme.borders.borderRadius.xl,
  };

  return {
    styleOverrides: {
      root: rootStyles,
    },
  };
}
