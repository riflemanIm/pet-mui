// theme/components/flatpickr.ts
import { Components, Theme } from "@mui/material/styles";

export default function getFlatpickrStyles(
  theme: Theme
): Components["MuiCssBaseline"] {
  return {
    styleOverrides: {
      "@global": {
        ".flatpickr-day:hover, .flatpickr-day:focus, .flatpickr-day.nextMonthDay:hover, .flatpickr-day.nextMonthDay:focus":
          {
            background: theme.palette.info.main + "28",
            border: "none",
          },
        ".flatpickr-day.today": {
          background: theme.palette.info.main,
          color: theme.palette.common.white,
          border: "none",
          "&:hover, &:focus": {
            background: theme.palette.info.focus + " !important",
          },
        },
        ".flatpickr-day.selected, .flatpickr-day.selected:hover, .flatpickr-day.nextMonthDay.selected, .flatpickr-day.nextMonthDay.selected:hover, .flatpickr-day.nextMonthDay.selected:focus":
          {
            background: theme.palette.gradients.info.state + " !important",
            color: theme.palette.common.white,
            border: "none",
          },
        ".flatpickr-months .flatpickr-next-month:hover svg, .flatpickr-months .flatpickr-prev-month:hover svg":
          {
            color: theme.palette.info.main + " !important",
            fill: theme.palette.info.main + " !important",
          },
      },
    },
  };
}
