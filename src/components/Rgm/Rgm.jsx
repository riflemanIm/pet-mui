import * as React from "react";

import { Map, Overlay, Marker } from "rgm";
import { useGoogleApiLoader } from "./dev-src/hooks";
//import LocalHospitalOutlinedIcon from "@mui/icons-material/LocalHospitalOutlined";
import { makeStyles } from "@mui/styles";
import { alpha } from "@mui/material/styles";
import Popover from "@mui/material/Popover";
import { Typography, Button, Grid } from "@mui/material";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import isEmpty from "../../helpers";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import WatchLaterIcon from "@mui/icons-material/WatchLater";
import PhoneIcon from "@mui/icons-material/Phone";
import InfoIcon from "@mui/icons-material/Info";
import logoOnly from "assets/logo-omly.min.svg";

const useStyles = makeStyles((theme) => {
  return {
    marker: {
      placeSelf: "center center",
      width: 30,
      height: 30,
      borderRadius: "100%",
      backgroundImage: `url(${logoOnly})`,
      backgroundSize: "22px 22px",
      backgroundPosition: "center center",
      backgroundRepeat: "no-repeat",
      backgroundColor: alpha(theme.palette.grey[0], 0.9),
      transition: theme.transitions.create(["background-color", "width"]),
      "&:hover": {
        cursor: "pointer",
        backgroundColor: alpha(theme.palette.grey[0], 1),
        width: 32,
        height: 32,
      },
      "&:active": {
        boxShadow: "inset 3px 3px 11px -8px rgba(0,0,0,0.51)",
        backgroundColor: alpha(theme.palette.grey[0], 1),
      },
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      boxShadow:
        "0px 1px 8px rgba(0, 0, 0, 0.103475), 0px 3px 3px rgba(0, 0, 0, 0.0988309), 0px 3px 4px rgba(0, 0, 0, 0.10301)",
    },

    active: {
      boxShadow: "inset 3px 3px 11px -8px rgba(0,0,0,0.51)",
      backgroundColor: alpha(theme.palette.grey[0], 1),
    },

    card: {
      minWidth: 275,
      maxWidth: 520,
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)",
    },

    nonUnderline: {
      textDecoration: "none",
    },
    onIcon: {
      color: theme.palette.primary.light,
    },
  };
});

/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

const CircleMarker = ({ data }) => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = React.useCallback((event) => {
    setAnchorEl(event.currentTarget);
  }, []);

  const handleClose = React.useCallback(() => {
    setAnchorEl(null);
  }, []);

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  //const bull = <span className={classes.bullet}>•</span>;

  return (
    <>
      <div className={classes.marker} onClick={handleClick} />
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "center",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "center",
        }}
      >
        <Card className={classes.card}>
          <CardContent>
            <Typography variant="h4" component="h2" mb={4}>
              {data.name}
            </Typography>
            <Grid container spacing={0}>
              <Grid item xs={1}>
                <LocationOnIcon className={classes.onIcon} />
              </Grid>
              <Grid item xs={11}>
                <Typography>{data.address}</Typography>
                <Typography variant="body2">
                  {data.nearbyTransportHubs != null && data.nearbyTransportHubs}
                </Typography>
              </Grid>

              {data.workTime && (
                <>
                  <Grid item xs={1} pt={2}>
                    <WatchLaterIcon className={classes.onIcon} />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography>{data.workTime}</Typography>
                  </Grid>
                </>
              )}
              {data.phone && (
                <>
                  <Grid item xs={1} pt={2}>
                    <PhoneIcon className={classes.onIcon} />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography>{data.phone}</Typography>
                  </Grid>
                </>
              )}
              {data.description && (
                <>
                  <Grid item xs={1} pt={2}>
                    <InfoIcon className={classes.onIcon} />
                  </Grid>
                  <Grid item xs={11}>
                    <Typography variant="body2">{data.description}</Typography>
                  </Grid>
                </>
              )}
            </Grid>
          </CardContent>
        </Card>
      </Popover>
    </>
  );
};
/* eslint-disable react/prop-types */ // TODO: upgrade to latest eslint tooling

export default function Rgm({ data, options, mapsKey }) {
  const api = useGoogleApiLoader(mapsKey);

  //console.log('data', data);
  return (
    api &&
    !isEmpty(data) && (
      <Map api={api} options={options}>
        <Overlay>
          {data.map((item, inx) => {
            if (item.coordinates != null && item.coordinates !== "") {
              const [lat, lng] = item.coordinates.split(", ");
              return (
                <Marker lat={lat} lng={lng} key={inx}>
                  <CircleMarker data={item} />
                </Marker>
              );
            }
            return null;
          })}
        </Overlay>
      </Map>
    )
  );
}
