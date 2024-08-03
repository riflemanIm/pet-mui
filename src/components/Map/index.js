import React, { useState } from "react";
import Main from "layouts/Main";
import Container from "components/Container";
import Map from "components/YandexMap";
import Box from "@mui/material/Box";

import Dropdown from "./components/Dropdown";
import Headline from "components/Headline";

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
  const [coordinates, setCoordinates] = useState(data[0].value);

  return (
    <Main>
      <Container>
        <Headline
          head="Мы здесь!"
          subhead1="Адреса магазинов, в которых нас можно найти:"
        />
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
