// theme/base/globals.ts
import { CSSObject } from "@mui/system";
import { createTheme } from "@mui/material/styles";
import colors from "./colors";

export interface Globals {
  body: CSSObject;
  a: CSSObject;
  link: CSSObject;
}

// Create a temporary theme to get typed palette
const theme = createTheme({ palette: colors });
const { palette } = theme;
const darkMain = palette.black.main;
const infoMain = palette.info.main;

const globals: Globals = {
  body: {
    margin: 0,
    padding: 0,
  },
  a: {
    textDecoration: "none !important",
  },
  link: {
    color: `${darkMain} !important`,
    transition: "color 150ms ease-in !important",
    "&:hover, &:focus": {
      color: `${infoMain} !important`,
    },
  },
};

export default globals;
