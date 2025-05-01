import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dropdown from "./Dropdown";

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
const SwitchCities = ({ coordinates, setCoordinates }) => {
  const theme = useTheme();

  const isMd = useMediaQuery(theme.breakpoints.up("md"), {
    defaultMatches: true,
  });
  const handleChange = (event, newCoordinates) => {
    setCoordinates(newCoordinates);
  };
  return isMd ? (
    <Tabs
      value={coordinates}
      onChange={handleChange}
      orientation="vertical"
      sx={{ borderRight: 1, borderColor: "divider" }}
      aria-label="Cities"
    >
      {data.map((item) => (
        <Tab value={item.value} label={item.label} sx={{ textAlign: "left" }} />
      ))}
    </Tabs>
  ) : (
    <Dropdown
      options={data}
      coordinates={coordinates}
      setCoordinates={setCoordinates}
    />
  );
};

export default SwitchCities;
