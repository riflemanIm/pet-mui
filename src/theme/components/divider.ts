// theme/components/divider.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";
import rgba from "theme/functions/rgba";
import pxToRem from "theme/functions/pxToRem";

export function getDividerComponents(theme: Theme): Components["MuiDivider"] {
  const { dark, white } = theme.palette;
  const style: CSSObject = {
    background: rgba(dark.main, 0.2),
    height: pxToRem(1),
    margin: `${pxToRem(16)} 0`,
    borderBottom: "none",
    opacity: 0.25,
  };
  const vertical: CSSObject = {
    background: rgba(dark.main, 0.2),
    width: pxToRem(1),
    height: "100%",
    margin: `0 ${pxToRem(16)}`,
    borderRight: "none",
  };
  const lightStyle: CSSObject = {
    background: rgba(white.main, 0.2),
    "&.MuiDivider-vertical": { background: rgba(white.main, 0.2) },
  };
  return {
    styleOverrides: {
      root: style,
      vertical,
      light: lightStyle,
    },
  };
}
