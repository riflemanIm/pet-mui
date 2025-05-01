import { RecoilRoot, useRecoilSnapshot } from "recoil";

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";
import { AppProps } from "next/app";
import { SnackbarProvider } from "notistack";
import { RecoilURLSyncJSONNext } from "recoil-sync-next";
import theme from "theme";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <RecoilRoot>
      <RecoilURLSyncJSONNext location={{ part: "queryParams" }}>
        <SnackbarProvider maxSnack={3} autoHideDuration={3000}>
          <ThemeProvider theme={theme}>
            <CssBaseline /> <Component {...pageProps} />
          </ThemeProvider>
        </SnackbarProvider>
      </RecoilURLSyncJSONNext>
    </RecoilRoot>
  );
}

export default MyApp;
