import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import { useTheme } from "@mui/material/styles";

const Footer = () => {
  const theme = useTheme();
  const { mode } = theme.palette;

  return (
    <Grid container spacing={2}>
      <Grid item xs={12}>
        <Box
          display={"flex"}
          justifyContent={"space-between"}
          alignItems={"center"}
          width={1}
          flexDirection={{ xs: "column", sm: "row" }}
        >
          <Box
            display={"flex"}
            component="a"
            href="/"
            title="theFront"
            width={120}
          >
            <Box
              component={"img"}
              src={
                mode === "light"
                  ? "/images/logo_shepherd_navy.svg"
                  : "/images/logo_shepherd_light.svg"
              }
              height={1}
              width={1}
            />
          </Box>
          <Box display="flex" flexWrap={"wrap"} alignItems={"center"}>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/"
                color="text.primary"
                variant={"subtitle2"}
              >
                Главная
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/catalog"
                color="text.primary"
                variant={"subtitle2"}
              >
                Каталог
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/about"
                color="text.primary"
                variant={"subtitle2"}
              >
                О нас
              </Link>
            </Box>
            <Box marginTop={1} marginRight={2}>
              <Link
                underline="none"
                component="a"
                href="/map"
                color="text.primary"
                variant={"subtitle2"}
              >
                На карте
              </Link>
            </Box>
            <Box marginTop={1}>
              <Button
                variant="outlined"
                color="primary"
                component="a"
                target="blank"
                href="mailto:info@baaahs.org?subject=Writing%20from%20the%20web"
                size="small"
              >
                Контакты
              </Button>
            </Box>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={12}>
        <Typography
          align={"center"}
          variant={"subtitle2"}
          color="text.secondary"
          gutterBottom
        >
          Shepherd TM - лакомства для животных
        </Typography>
        <Typography
          align={"center"}
          variant={"caption"}
          color="text.secondary"
          component={"p"}
        >
          © Shepherd TM 2024. Все права защищены
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
