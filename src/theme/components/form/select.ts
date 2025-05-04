// theme/components/form/select.ts
import { Components, Theme } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";

export function getSelectComponents(theme: Theme): Components["MuiSelect"] {
  return {
    styleOverrides: {
      select: {
        display: "grid",
        alignItems: "center",
        padding: `0 ${pxToRem(12)} !important`,
        "& .Mui-selected": {
          backgroundColor: theme.palette.background.paper,
        },
      },
      icon: {
        display: "none",
      },
    },
  };
}
