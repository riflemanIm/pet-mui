import React from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import YMap from "./YMap";

const API_KEY = "05f8d2ae-bd94-4329-b9f9-7351e2ec9627";

const YandexMap = ({ coordinates, data, defaultMapZoom }) => {
  const center = coordinates != null ? coordinates.split(", ") : [];
  return (
    <YMaps
      query={{
        load: "package.full",
        apikey: API_KEY,
      }}
    >
      <YMap
        options={{
          center,
          zoom: defaultMapZoom,
        }}
        data={data}
      />
    </YMaps>
  );
};

export default YandexMap;
