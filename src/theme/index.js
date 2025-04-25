import { responsiveFontSizes, createTheme } from "@mui/material";
import { Roboto } from "next/font/google";
import shadows from "./shadows";
import { light, dark } from "./palette";

const roboto = Roboto({
  weight: ["400", "500", "700"],
  subsets: ["latin"],
});

const getTheme = (mode, themeToggler) =>
  responsiveFontSizes(
    createTheme({
      palette: mode === "light" ? light : dark,
      shadows: shadows(mode),
      typography: {
        fontFamily: `${roboto.style.fontFamily}, Roboto, sans-serif`,
        h1: { fontSize: "2.5rem" },
        h2: { fontWeight: 700, fontSize: "2rem" },
        h3: { fontWeight: 700, fontSize: "1.85rem" },
        h4: { fontWeight: 400, fontSize: "1.8rem" },
        h5: { fontWeight: 400, fontSize: "1.25rem" },
        h6: { fontWeight: 400, fontSize: "1rem" },
        subtitle1: { fontWeight: 500, fontSize: "1rem" },
        subtitle2: { fontWeight: 500, fontSize: "0.875rem" },
        body1: { fontWeight: 400, fontSize: "1rem" },
        body2: { fontWeight: 400, fontSize: "0.875rem" },
        button: {
          fontWeight: 500,
          fontSize: "0.875rem",
          textTransform: "none",
        },
        caption: { fontWeight: 400, fontSize: "0.75rem" },
        overline: {
          fontWeight: 400,
          fontSize: "0.625rem",
          textTransform: "uppercase",
        },
      },
      zIndex: {
        appBar: 1200,
        drawer: 1300,
      },
      components: {
        MuiButton: {
          styleOverrides: {
            root: {
              fontWeight: 400,
              borderRadius: 5,
              paddingTop: 10,
              paddingBottom: 10,
            },
            containedSecondary: mode === "light" ? { color: "white" } : {},
          },
        },
        MuiInputBase: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
          },
        },
        MuiOutlinedInput: {
          styleOverrides: {
            root: {
              borderRadius: 5,
            },
            input: {
              borderRadius: 5,
            },
          },
        },
        MuiCard: {
          styleOverrides: {
            root: {
              borderRadius: 8,
            },
          },
        },
        MuiTypography: {
          defaultProps: {
            variantMapping: {
              h1: "h1",
              h2: "h2",
              h3: "h3",
              h4: "h4",
              h5: "h5",
              h6: "h6",
              subtitle1: "h6",
              subtitle2: "h6",
              body1: "p",
              body2: "p",
              caption: "span",
              button: "span",
              overline: "span",
            },
          },
        },
      },
      themeToggler,
    })
  );

export default getTheme;
