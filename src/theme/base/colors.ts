// theme/base/colors.ts
import { alpha } from "@mui/system";
import { PaletteOptions } from "@mui/material/styles";

// Extend MUI Palette and PaletteOptions to include custom colors
declare module "@mui/material/styles" {
  interface Palette {
    white: string;
    black: {
      light: string;
      main: string;
      dark: string;
    };
    inputBorderColor: string;
    tabs: {
      indicator: { boxShadow: string };
    };
  }
  interface PaletteOptions {
    white?: string;
    black?: {
      light?: string;
      main?: string;
      dark?: string;
    };
    inputBorderColor?: string;
    tabs?: {
      indicator: { boxShadow: string };
    };
  }
}

const colors: PaletteOptions = {
  white: "#FFFFFF",
  black: {
    light: "#676767",
    main: "#000000",
    dark: "#000000",
  },
  background: {
    default: alpha("#ECF4E0", 0.5),
  },
  text: {
    primary: "#7b809a",
    secondary: "#a7a9af",
  },
  action: {
    disabled: "#a7a9af",
  },
  info: {
    main: "#00bbd4",
  },
  success: {
    main: "#4caf4f",
  },
  warning: {
    main: "#ff9900",
  },
  error: {
    main: "#f44336",
  },
  grey: {
    50: "#fafafa",
    100: "#f5f5f5",
    200: "#eeeeee",
    300: "#e0e0e0",
    400: "#bdbdbd",
    500: "#9e9e9e",
    600: "#757575",
    700: "#616161",
    800: "#424242",
    900: "#212121",
    A100: "#d5d5d5",
    A200: "#aaaaaa",
    A400: "#303030",
    A700: "#616161",
  },
  primary: {
    main: "#7367F0",
    light: "#9f95f7",
    dark: "#5948c6",
  },
  secondary: {
    main: "#828fa0",
    light: "#a5a8b4",
    dark: "#5c5f6e",
  },
  inputBorderColor: "#d2d6da",
  tabs: {
    indicator: { boxShadow: "#ddd" },
  },
};

export default colors;
