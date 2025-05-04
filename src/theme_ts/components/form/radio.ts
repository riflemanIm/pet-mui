// theme/components/form/radio.ts
import { Components, Theme } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";
import linearGradient from "theme/functions/linearGradient";

export function getRadioComponents(theme: Theme): Components["MuiRadio"] {
  const bw = theme.borders.borderWidth;
  const bc = theme.palette.divider;
  const checkedColor = theme.palette.info.main;
  return {
    styleOverrides: {
      root: {
        "& .MuiSvgIcon-root": {
          width: pxToRem(20),
          height: pxToRem(20),
          color: theme.palette.background.paper,
          border: `${bw.thin} solid ${bc}`,
          borderRadius: "50%",
        },
        "&:after": {
          transition: "opacity 250ms ease-in-out",
          content: '""',
          position: "absolute",
          width: pxToRem(14),
          height: pxToRem(14),
          borderRadius: "50%",
          backgroundImage: linearGradient(checkedColor, checkedColor),
          opacity: 0,
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          margin: "auto",
        },
        "&:hover": { backgroundColor: theme.palette.action.hover },
        "&.Mui-focusVisible": {
          border: `${bw.thick} solid ${checkedColor} !important`,
        },
      },
      colorPrimary: {
        color: bc,
        "&.Mui-checked": {
          color: checkedColor,
          "& .MuiSvgIcon-root": { borderColor: checkedColor },
          "&:after": { opacity: 1 },
        },
      },
      colorSecondary: {
        color: bc,
        "&.Mui-checked": {
          color: checkedColor,
          "& .MuiSvgIcon-root": { borderColor: checkedColor },
          "&:after": { opacity: 1 },
        },
      },
    },
  };
}
