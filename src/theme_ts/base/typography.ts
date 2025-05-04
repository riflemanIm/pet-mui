// theme/base/typography.ts
import { ThemeOptions } from "@mui/material/styles";

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

// Base typography options conforming to MUI ThemeOptions.typography
enum BaseFontSizes {
  Base = 16,
}

const typography: ThemeOptions["typography"] = {
  fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  fontSize: BaseFontSizes.Base,
  htmlFontSize: BaseFontSizes.Base,
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
