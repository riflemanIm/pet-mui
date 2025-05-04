// theme/components/table/tableHead.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

/**
 * Generate style overrides for MuiTableHead component.
 */
export function getTableHeadComponents(
  theme: Theme
): Components["MuiTableHead"] {
  const borderRadiusXl = theme.borders.borderRadius.xl;

  const rootStyles: CSSObject = {
    display: "block",
    padding: `${pxToRem(16)} ${pxToRem(16)} 0 ${pxToRem(16)}`,
    borderRadius: `${borderRadiusXl} ${borderRadiusXl} 0 0`,
  };

  return {
    styleOverrides: {
      root: rootStyles,
    },
  };
}
