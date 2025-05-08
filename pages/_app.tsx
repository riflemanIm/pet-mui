import { RecoilRoot } from "recoil";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import classNames from "classnames";
import { AppProps } from "next/app";
import { Roboto, Roboto_Slab } from "next/font/google";
import { SnackbarProvider } from "notistack";
import { RecoilURLSyncJSONNext } from "recoil-sync-next";
import theme from "theme";

// Инициализируем шрифт здесь:
const roboto = Roboto({
  subsets: ["cyrillic", "cyrillic-ext", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  // display: 'swap' // по-умолчанию уже swap
});
const robotoSlab = Roboto_Slab({
  subsets: ["cyrillic", "cyrillic-ext", "latin-ext"],
  weight: ["400", "500", "600", "700", "800", "900"],
  // display: 'swap' // по-умолчанию уже swap
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
