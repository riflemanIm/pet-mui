import React, { useEffect, useState } from "react";
import Router from "next/router";
import { useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

import Main from "layouts/Main";
import Container from "components/Container";
import Form from "./Form";
import ConfirnCode from "./ConfirnCode";
import { currentUserState } from "atoms";
import { useRecoilState } from "recoil";
import img from "assets/images/signup1.png";

const SignIn = () => {
  const theme = useTheme();
  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });

  const [, setCurrentUser] = useRecoilState(currentUserState);
  const [signState, setSignState] = useState();

  useEffect(() => {
    if (signState && signState.response === "USER_AUTH") {
      setCurrentUser(signState.user);
      localStorage.setItem("user", JSON.stringify(signState.user));
      Router.push("/catalog");
    }
  }, [signState?.response]);

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
            {isMd ? (
              <Grid item container justifyContent={"center"} xs={12} md={6}>
                <Box height={1} width={1} maxWidth={500}>
                  <Box
                    component={"img"}
                    src={img.src}
                    width={1}
                    height={1}
                    sx={{
                      filter: "grayscale(.1)",
                      borderRadius: 5,
                    }}
                  />
                </Box>
              </Grid>
            ) : null}
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
                <Form signState={signState} setSignState={setSignState} />
              )}
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Main>
  );
};

export default SignIn;
