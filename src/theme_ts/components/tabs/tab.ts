// theme/components/tabs/tab.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import pxToRem from "theme/functions/pxToRem";

export function getTabComponents(theme: Theme): Components["MuiTab"] {
  // Используем customSizes вместо несуществующего typography.size
  const { md, sm, lg: radiusLg } = theme.customSizes;
  const { fontWeightRegular } = theme.typography;
  const { lg: borderRadiusLg } = theme.borders.borderRadius;
  const { dark } = theme.palette;

  const rootStyles: CSSObject = {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    flex: "1 1 auto",
    textAlign: "center",
    maxWidth: "unset !important",
    minWidth: "unset !important",
    minHeight: "unset !important",
    fontSize: pxToRem(md),
    fontWeight: fontWeightRegular,
    textTransform: "none",
    lineHeight: "inherit",
    padding: pxToRem(sm),
    borderRadius: borderRadiusLg,
    color: `${dark.main} !important`,
    opacity: "1 !important",
    "& .material-icons, .material-icons-round": {
      marginBottom: 0,
      marginRight: pxToRem(6),
    },
    "& svg": {
      marginBottom: 0,
      marginRight: pxToRem(6),
    },
    "& .MuiTab-iconWrapper": {
      marginBottom: 0,
    },
  };

  const labelIconStyles: CSSObject = {
    paddingTop: pxToRem(4),
  };

  return {
    styleOverrides: {
      root: rootStyles,
      labelIcon: labelIconStyles,
    },
  };
}
