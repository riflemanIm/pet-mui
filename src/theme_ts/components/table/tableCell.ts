// theme/components/table/tableCell.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

/**
 * Generate style overrides for MuiTableCell component.
 */
export function getTableCellComponents(
  theme: Theme
): Components["MuiTableCell"] {
  const borderWidth = theme.borders.borderWidth;
  const lightMain = theme.palette.grey[100];

  const rootStyles: CSSObject = {
    padding: `${pxToRem(12)} ${pxToRem(16)}`,
    borderBottom: `${borderWidth[1]} solid ${lightMain}`,
  };

  return {
    styleOverrides: {
      root: rootStyles,
    },
  };
}
