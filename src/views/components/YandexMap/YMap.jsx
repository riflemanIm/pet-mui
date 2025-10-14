import React, { useMemo } from "react";

import { Map, Placemark, useYMaps } from "@pbe/react-yandex-maps";
import { makeStyles } from "@mui/styles";
import logoOnly from "assets/logo-omly.min.svg";
import { useTheme } from "@mui/material";
import balloonContentLayout from "./balloonContentLayout";

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling
const useStyles = makeStyles(() => {
  return {
    marker: {
      placeSelf: "center center",
      width: 30,
      height: 30,
      borderRadius: "100%",
      backgroundImage: `url(${logoOnly.src})`,
      backgroundSize: "22px 22px",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundColor: "#fff",
      //transition: theme.transitions.create(["background-color", "width"]),
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow:
        "0px 1px 8px rgba(0, 0, 0, 0.103475), 0px 3px 3px rgba(0, 0, 0, 0.0988309), 0px 3px 4px rgba(0, 0, 0, 0.10301)",
    },
  };
});

const YMap = ({ data, options }) => {
  const ymaps = useYMaps(["templateLayoutFactory"]);
  const theme = useTheme();
  const classes = useStyles();
  // Layout of marker by yandex design
  const MarkerLayout = useMemo(
    (item) =>
      ymaps &&
      ymaps.templateLayoutFactory.createClass(
        `<div class=${classes.marker}></div>`
      ),
    [ymaps]
  );

  return (
    ymaps && (
      <Map state={options} width={"100%"} height={"100%"}>
        {data.map((item, index) => {
          // const [lat, lon] =
          //   item.coordinates != null
          //     ? item.coordinates.split(', ')
          //     : [null, null];

          console.log("theme", theme);

          return (
            <Placemark
              key={index}
              defaultGeometry={
                item.coordinates != null ? item.coordinates.split(", ") : []
              }
              options={{
                iconLayout: "default#imageWithContent",
                iconContentLayout: MarkerLayout,
                iconImageHref: "none",
                iconImageSize: [33, 33],
                iconImageOffset: [-17, -17],
              }}
              properties={{
                hintContent: item.title,
                balloonContent: balloonContentLayout(item, theme),
              }}
            />
          );
        })}
      </Map>
    )
  );
};

export default YMap;
