/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import YandexMap from "components/YandexMap";

const Map = () => {
  const coordinates = "45.223453, 38.997600";
  const defaultMapZoom = 10;
  const data = [
    {
      id: 1,
      address: "Новотитаровская, ул. Ейское шоссе, 5А",
      workTime: "",
      name: "Shepherd",
      coordinates: "45.223453, 38.997600",
      typeId: 12,
      phone: "+7 989 777 2000",

      description: "",
      nearbyTransportHubs: "",
      timeOffset: 0,
      email: "info@s-pet.ru",
      www: "https://s-pet.ru",
    },
  ];

  return (
    <Box>
      <Box marginY={3} style={{ width: "100%", height: 500 }}>
        <YandexMap
          coordinates={coordinates}
          data={data}
          defaultMapZoom={defaultMapZoom}
        />
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography variant={"subtitle1"}>
            Новотитаровская, ул. Ейское шоссе, 5А
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={"body2"}
            gutterBottom
            sx={{ fontWeight: "medium" }}
          >
            Телефон:
          </Typography>
          <Typography variant={"subtitle1"}>+7 989 777 2000</Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Typography
            variant={"body2"}
            gutterBottom
            sx={{ fontWeight: "medium" }}
          >
            Email:
          </Typography>
          <Typography variant={"subtitle1"}>info@s-pet.ru</Typography>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Map;
