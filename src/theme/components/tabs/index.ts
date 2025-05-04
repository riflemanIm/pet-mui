// theme/components/tabs/index.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

export function getTabsComponents(theme: Theme): Components["MuiTabs"] {
  const { grey, common } = theme.palette;

  const { xl } = theme.borders.borderRadius;
  const { tabsBoxShadow } = theme.boxShadows;

  const rootStyles: CSSObject = {
    position: "relative",
    backgroundColor: grey[100],
    borderRadius: xl,
    minHeight: "unset",
    padding: pxToRem(4),
  };

  const flexContainerStyles: CSSObject = {
    height: "100%",
    position: "relative",
    zIndex: 10,
  };

  const fixedStyles: CSSObject = {
    overflow: "unset",
    overflowX: "unset",
  };

  const verticalStyles: CSSObject = {
    "& .MuiTabs-indicator": {
      width: "100%",
    },
  };

  const indicatorStyles: CSSObject = {
    height: "100%",
    borderRadius: theme.borders.borderRadius.lg,
    backgroundColor: common.white,
    boxShadow: tabsBoxShadow.indicator,
    transition: "all 500ms ease",
  };

  return {
    styleOverrides: {
      root: rootStyles,
      flexContainer: flexContainerStyles,
      fixed: fixedStyles,
      vertical: verticalStyles,
      indicator: indicatorStyles,
    },
  };
}
