import React from "react";
import { alpha, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

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
          О нас
        </Typography>
        <Typography
          variant="h6"
          color={"text.secondary"}
          align={"center"}
          gutterBottom
        >
          Мы поможем Вам на каждом этапе процесса
        </Typography>
        <Typography variant="h6" color={"text.secondary"} align={"center"}>
          Наши специалисты проконсультируют Вас по любым вопросам питания и
          пищевого поведения вашего питомца
        </Typography>
      </Box>
    </Box>
  );
};

export default Headline;
