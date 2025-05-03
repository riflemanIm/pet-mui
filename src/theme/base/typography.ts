// theme/base/typography.ts
import { Palette } from "@mui/material/styles";
import { TypographyOptions } from "@mui/material/styles";

// Extend Theme interface to include custom sizes and lineHeights
declare module "@mui/material/styles" {
  interface Theme {
    customSizes: Record<string, number>;
    customLineHeights: Record<string, number>;
  }
  interface ThemeOptions {
    customSizes?: Record<string, number>;
    customLineHeights?: Record<string, number>;
  }
}

const typography: TypographyOptions = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: 16, // base font size in px
  htmlFontSize: 16, // used to compute rem values
};

// Additional custom sizes and line heights
const customSizes: Record<string, number> = {
  xs: 12,
  sm: 14,
  md: 16,
  lg: 18,
  xl: 20,
  "2xl": 24,
  "3xl": 30,
};

const customLineHeights: Record<string, number> = {
  sm: 1.25,
  md: 1.5,
  lg: 2,
};

export { typography, customSizes, customLineHeights };
