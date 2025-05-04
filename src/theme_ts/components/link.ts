// theme/components/link.ts
import { Components, Theme } from "@mui/material/styles";
import { CSSObject } from "@mui/system";

export function getLinkComponents(theme: Theme): Components["MuiLink"] {
  const { info, light } = theme.palette;
  return {
    styleOverrides: {
      root: {
        color: info.main,
        textDecoration: "none",
        transition: "color 150ms ease-in",
        "&:hover": {
          color: info.dark || info.main,
        },
      } as CSSObject,
      underlineNone: {
        "&:hover": {
          textDecoration: "none",
        },
      } as CSSObject,
      // если надо, можно добавить другие слоты
    },
  };
}
