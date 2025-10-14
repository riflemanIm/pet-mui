import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import classNames from "classnames";
import { AppProps } from "next/app";
import localFont from "next/font/local";
import { SnackbarProvider } from "notistack";
import theme from "theme";
import { AppStateProvider } from "context/AppStateContext";

import "simplebar-react/dist/simplebar.min.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/500.css";
import "@fontsource/public-sans/600.css";
import "@fontsource/public-sans/700.css";
// Инициализируем шрифт здесь:
const roboto = localFont({
  src: [
    {
      path: "../public/fonts/RobotoCondensed/RobotoCondensed-Light.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/RobotoCondensed/RobotoCondensed-LightItalic.woff",
      weight: "100",
      style: "italic",
    },

    {
      path: "../public/fonts/RobotoCondensed/RobotoCondensed-Regular.woff",
      weight: "400",
      style: "normal",
    }, // regular
    {
      path: "../public/fonts/RobotoCondensed/RobotoCondensed-Italic.woff",
      weight: "400",
      style: "italic",
    },

    {
      path: "../public/fonts/RobotoCondensed/RobotoCondensed-Bold.woff",
      weight: "600",
      style: "normal",
    }, // bold
    {
      path: "../public/fonts/RobotoCondensed/RobotoCondensed-BoldItalic.woff",
      weight: "600",
      style: "italic",
    },
  ],
  display: "swap",
});
const robotoSlab = localFont({
  src: [
    {
      path: "../public/fonts/RobotoSlab/RobotoSlab-Thin.woff",
      weight: "100",
      style: "normal",
    },
    {
      path: "../public/fonts/RobotoSlab/RobotoSlab-Regular.woff",
      weight: "400",
      style: "normal",
    }, // regular

    {
      path: "../public/fonts/RobotoSlab/RobotoSlab-Bold.woff",
      weight: "600",
      style: "normal",
    }, // bold
  ],
  display: "swap",
});

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppStateProvider>
      <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
        <ThemeProvider theme={theme}>
          <div className={classNames(roboto.className, robotoSlab.className)}>
            <CssBaseline /> <Component {...pageProps} />{" "}
          </div>
        </ThemeProvider>
      </SnackbarProvider>
    </AppStateProvider>
  );
}

export default MyApp;
