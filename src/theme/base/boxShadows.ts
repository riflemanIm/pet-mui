// theme/base/boxShadows.ts
import { Palette } from "@mui/material/styles";
import colors from "theme/base/colors";
import boxShadow from "theme/functions/boxShadow";

// Cast colors to full Palette to ensure required fields
const palette = colors as Palette;
const { black, white, tabs } = palette;

export interface BoxShadows {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  inset: string;
  sliderBoxShadow: {
    thumb: string;
  };
  tabsBoxShadow: {
    indicator: string;
  };
}

const boxShadows: BoxShadows = {
  xs: boxShadow([0, 2], [9, -5], black.main, 0.15),
  sm: boxShadow([0, 5], [10, 0], black.main, 0.12),
  md: boxShadow([0, 4], [6, -1], black.main, 0.1),
  lg: boxShadow([0, 5], [15, 0], black.main, 0.1),
  xl: boxShadow([0, 10], [20, 0], black.main, 0.1),
  xxl: boxShadow([0, 20], [25, 0], black.main, 0.2),
  inset: boxShadow([0, 1], [2, 0], white, 0.07, "inset"),

  sliderBoxShadow: {
    thumb: boxShadow([0, 1], [13, 0], black.main, 0.2),
  },
  tabsBoxShadow: {
    indicator: boxShadow([0, 1], [5, 1], tabs.indicator.boxShadow, 1),
  },
};

export default boxShadows;
