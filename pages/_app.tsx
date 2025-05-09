import { RecoilRoot } from "recoil";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import classNames from "classnames";
import { AppProps } from "next/app";
import localFont from "next/font/local";
import { SnackbarProvider } from "notistack";
import { RecoilURLSyncJSONNext } from "recoil-sync-next";
import theme from "theme";
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
    <RecoilRoot>
      <RecoilURLSyncJSONNext location={{ part: "queryParams" }}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <ThemeProvider theme={theme}>
            <div className={classNames(roboto.className, robotoSlab.className)}>
              <CssBaseline /> <Component {...pageProps} />{" "}
            </div>
          </ThemeProvider>
        </SnackbarProvider>
      </RecoilURLSyncJSONNext>
    </RecoilRoot>
  );
}

export default MyApp;
