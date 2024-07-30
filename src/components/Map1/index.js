import React, { useState } from "react";
import Main from "layouts/Main";
import Container from "components/Container";
import Map from "components/YandexMap";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { alpha, useTheme } from "@mui/material/styles";

import Dropdown from "./components/Dropdown";

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
const data = [
  { value: "45.032744, 39.094367", label: "Краснодар" },
  { value: "55.668950, 37.559494", label: "Москва" },
  { value: "55.437485, 37.749858", label: "Домодедово" },
  { value: "48.560673, 39.376366", label: "Луганск" },
  { value: "69.002107, 33.106503", label: "Мурманск" },
  { value: "44.927775, 38.009579", label: "Крымск" },
  { value: "43.576611, 39.748789", label: "Сочи" },
  { value: "44.865362, 38.153974", label: "Абинск" },
  { value: "45.241054, 38.969052", label: "Новотитаровская" },
  { value: "43.501088, 43.602484", label: "Нальчик" },
  { value: "45.253295, 38.117404", label: "Славянск‑на‑Кубани" },
  { value: "59.855188, 30.150229", label: "Санкт-Петербург" },
  { value: "44.562422, 38.081480", label: "Геленджик" },
  { value: "48.488112, 135.079355", label: "Хабаровск " },
  { value: "61.766058, 34.291326", label: "Петрозаводск" },
];
const Contact = () => {
  const [coordinates, setCoordinates] = useState("45.032744, 39.094367");

  return (
    <Main>
      <Container>
        <Headline />
        <Box textAlign="center" mt={3}>
          <Dropdown
            options={data}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          />
        </Box>
      </Container>
      <Box style={{ width: "100%", height: 500 }}>
        <Map coordinates={coordinates} />
      </Box>
    </Main>
  );
};

export default Contact;
