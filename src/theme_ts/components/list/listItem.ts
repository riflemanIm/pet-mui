// theme/components/list/listItem.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

/**
 * Generate style overrides for MuiListItem component.
 */
export function getListItemComponents(theme: Theme): Components["MuiListItem"] {
  const { action } = theme.palette;
  const rootStyles: CSSObject = {
    paddingTop: pxToRem(8),
    paddingBottom: pxToRem(8),
    "&.Mui-selected": {
      backgroundColor: action.selected,
    },
    "&.Mui-selected:hover": {
      backgroundColor: action.selected,
    },
  };

  return {
    styleOverrides: {
      root: rootStyles,
    },
  };
}
