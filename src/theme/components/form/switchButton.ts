// theme/components/form/switchButton.ts
import { Components, Theme } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";
import linearGradient from "theme/functions/linearGradient";
import colors from "theme/base/colors";

export function getSwitchComponents(theme: Theme): Components["MuiSwitch"] {
  const { white, gradients, grey } = colors;
  const bw = theme.borders.borderWidth;
  const boxShadow = theme.boxShadows.md;

  return {
    defaultProps: { disableRipple: false },
    styleOverrides: {
      switchBase: {
        color: gradients.dark.main,
        "&:hover": { backgroundColor: theme.palette.action.hover },
        "&.Mui-checked": {
          color: gradients.dark.main,
          "&:hover": { backgroundColor: theme.palette.action.hover },
          "& .MuiSwitch-thumb": {
            borderColor: `${gradients.dark.main} !important`,
          },
          "& + .MuiSwitch-track": {
            backgroundColor: `${gradients.dark.main} !important`,
            borderColor: `${gradients.dark.main} !important`,
            opacity: 1,
          },
        },
        "&.Mui-disabled + .MuiSwitch-track": { opacity: 0.3 },
        "&.Mui-focusVisible .MuiSwitch-thumb": {
          backgroundImage: linearGradient(
            theme.palette.info.main,
            theme.palette.info.dark
          ),
        },
      },
      thumb: {
        backgroundColor: white,
        boxShadow,
        border: `${bw.thin} solid ${grey[400]}`,
      },
      track: {
        width: pxToRem(32),
        height: pxToRem(15),
        backgroundColor: grey[400],
        border: `${bw.thin} solid ${grey[400]}`,
        opacity: 1,
      },
    },
  };
}
