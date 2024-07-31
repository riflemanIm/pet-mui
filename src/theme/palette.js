import tinycolor from "tinycolor2";
const lighterenRate = 1.5;
const lightenRate = 7.5;
const darkenRate = 15;
const darkerRate = 30;
const PRIMARY = "#342F4F";
const SECONDARY = "#2c4464";
export const light = {
  alternate: {
    main: "#fffafa",
    dark: "#edf1f7",
  },
  cardShadow: "rgba(23, 70, 161, .11)",
  mode: "light",
  primary: {
    main: PRIMARY,
    light: tinycolor(PRIMARY).lighten(lightenRate).toHexString(),
    dark: tinycolor(PRIMARY).darken(darkenRate).toHexString(),
    darker: tinycolor(PRIMARY).darken(darkerRate).toHexString(),
    contrastText: "#E7EDF6",
  },
  secondary: {
    main: SECONDARY,
    light: tinycolor(SECONDARY).lighten(lightenRate).toHexString(),
    dark: tinycolor(SECONDARY).darken(darkenRate).toHexString(),
    darker: tinycolor(SECONDARY).darken(darkerRate).toHexString(),
    contrastText: "#E7EDF6",
  },
  secondary: {
    main: SECONDARY,
    light: tinycolor(SECONDARY).lighten(lightenRate).toHexString(),
    dark: tinycolor(SECONDARY).darken(darkenRate).toHexString(),
    darker: tinycolor(SECONDARY).darken(darkerRate).toHexString(),
    contrastText: "#E7EDF6",
  },
  text: {
    primary: "#0D3C3C",
    secondary: "#677788",
  },
  divider: "rgba(0, 0, 0, 0.12)",
  background: {
    paper: "#fff",
    default: "#fffafa",
    level1: "#E9EEF6",
    level2: "#fffafa",
  },
};

export const dark = {
  alternate: {
    main: "#1a2138",
    dark: "#151a30",
  },
  cardShadow: "rgba(0, 0, 0, .11)",
  common: {
    black: "#000",
    white: "#fff",
  },
  mode: "dark",
  primary: {
    main: "#1976d2",
    light: "#2196f3",
    dark: "#0d47a1",
    contrastText: "#fff",
  },
  secondary: {
    light: "#FFEA41",
    main: "#FFE102",
    dark: "#DBBE01",
    contrastText: "rgba(0, 0, 0, 0.87)",
  },
  text: {
    primary: "#EEEEEF",
    secondary: "#AEB0B4",
  },
  divider: "rgba(255, 255, 255, 0.12)",
  background: {
    paper: "#222B45",
    default: "#222B45",
    level2: "#333",
    level1: "#2D3748",
  },
};
