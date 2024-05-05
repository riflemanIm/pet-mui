import React, { useEffect, useState } from "react";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import Main from "layouts/Main";
import Container from "components/Container";
import FormSignUp from "./components/FormSignUp";
import ConfirnCode from "./components/ConfirnCode";
import { currentUserState } from "atoms";
import { useRecoilState } from "recoil";

const SignUpSimple = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const [, setCurrentUserState] = useRecoilState(currentUserState);

  const [signState, setSignState] = useState();

  useEffect(() => {
    if (signState && signState.response === "USER_AUTH") {
      setCurrentUserState(signState.user);
      localStorage.setItem("user", signState.user);
    }
  }, [signState?.response]);

  //console.log("signState", signState);
  return (
    <Main>
      <Box
        position={"relative"}
        minHeight={"calc(100vh - 247px)"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        height={1}
      >
        <Container>
          <Grid container spacing={6}>
            <Grid
              item
              container
              alignItems={"center"}
              justifyContent={"center"}
              xs={12}
              md={6}
            >
              {signState?.response === "CODE_SENT" ||
              signState?.response === "DOSNT_EXISTS_CODE" ? (
                <ConfirnCode
                  signState={signState}
                  setSignState={setSignState}
                />
              ) : (
                <FormSignUp signState={signState} setSignState={setSignState} />
              )}
            </Grid>
            {isMd ? (
              <Grid item container justifyContent={"center"} xs={12} md={6}>
                <Box height={1} width={1} maxWidth={500}>
                  <Box
                    component={"img"}
                    src={
                      "https://assets.maccarianagency.com/svg/illustrations/drawkit-illustration4.svg"
                    }
                    width={1}
                    height={1}
                    sx={{
                      filter:
                        theme.palette.mode === "dark"
                          ? "brightness(0.8)"
                          : "none",
                    }}
                  />
                </Box>
              </Grid>
            ) : null}
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default SignUpSimple;
