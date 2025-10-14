import React from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import Dropdown from "./Dropdown";

const SwitchCities = ({ coordinates, setCoordinates, data }) => {
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
