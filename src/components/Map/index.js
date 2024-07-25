import React from "react";
import Main from "layouts/Main";
import Container from "components/Container";
import Map from "components/YandexMap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

const Headline = () => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: "relative",
        "&::after": {
          position: "absolute",
          content: '""',
          width: "30%",
          zIndex: 1,
          top: 0,
          right: 0,
          height: "100%",
          backgroundSize: "18px 18px",
          backgroundImage: `radial-gradient(${alpha(
            theme.palette.primary.dark,
            0.4
          )} 20%, transparent 20%)`,
          opacity: 0.2,
        },
      }}
    >
      <Box position="relative" zIndex={2}>
        <Typography
          fontWeight={600}
          variant={"h2"}
          gutterBottom
          align={"center"}
        >
          Мы здесь!
        </Typography>
        <Typography
          variant="h6"
          color={"text.secondary"}
          align={"center"}
          gutterBottom
        >
          Адреса магазинов, в которых нас можно найти:
        </Typography>
      </Box>
    </Box>
  );
};

const Contact = () => {
  return (
    <Main>
      <Container>
        <Headline />
      </Container>
      <Box style={{ width: "100%", height: 500 }}>
        <Map />
      </Box>
    </Main>
  );
};

export default Contact;
