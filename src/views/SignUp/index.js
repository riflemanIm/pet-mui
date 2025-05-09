import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import Grid2 from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Router from "next/router";
import { useEffect, useState } from "react";

import footerRoutes from "assets/footer.routes";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import img from "assets/images/signup1.png";
import routes from "assets/routes";
import { currentUserState } from "atoms";
import Container from "components/Container";
import DefaultFooter from "components/Footers/DefaultFooter";
import MKBox from "components/MKBox";
import MKTypography from "components/MKTypography";
import DefaultNavbar from "components/Navbars/DefaultNavbar";
import { useRecoilState } from "recoil";
import ConfirnCode from "./components/ConfirnCode";
import FormSignUp from "./components/FormSignUp";

const SignUp = () => {
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

  //console.log("signState", signState);
  return (
    <>
      <DefaultNavbar routes={routes} transparent light />
      <MKBox
        minHeight="35vh"
        width="100%"
        sx={{
          backgroundImage: ({
            functions: { linearGradient, rgba },
            palette: { gradients },
          }) =>
            `${linearGradient(
              rgba(gradients.dark.main, 0.6),
              rgba(gradients.dark.state, 0.6)
            )}, url(${bgImage.src})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "grid",
          placeItems: "center",
        }}
      >
        <Container>
          <Grid2
            container
            size={{ xs: 12, lg: 8 }}
            justifyContent="center"
            alignItems="center"
            flexDirection="column"
            sx={{ mx: "auto", textAlign: "center" }}
          >
            <MKTypography
              variant="h1"
              color="white"
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              Создайте аккаунт
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              opacity={0.8}
              mt={1}
              mb={3}
            >
              Мы поможем Вам на каждом этапе процесса. Наши специалисты
              проконсультируют Вас по любым вопросам питания и пищевого
              поведения вашего питомца
            </MKTypography>
          </Grid2>
        </Container>
      </MKBox>
      <Card
        sx={{
          p: 12,
          mx: { xs: 2, lg: 3 },
          mt: -8,
          mb: 4,

          boxShadow: ({ boxShadows: { xxl } }) => xxl,
        }}
      >
        <Container>
          <Grid2 container spacing={6}>
            <Grid2
              container
              alignItems={"center"}
              justifyContent={"center"}
              size={{ xs: 12, md: 6 }}
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
            </Grid2>

            {isMd ? (
              <Grid2
                container
                justifyContent={"center"}
                size={{ xs: 12, md: 6 }}
              >
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
              </Grid2>
            ) : null}
          </Grid2>
        </Container>
      </Card>

      {/* Footer */}
      <MKBox pt={6} px={1} mt={6}>
        <DefaultFooter content={footerRoutes} />
      </MKBox>
    </>
  );
};

export default SignUp;
