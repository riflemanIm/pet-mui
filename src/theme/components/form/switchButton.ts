// theme/components/form/switchButton.ts
import { Components, Theme } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";
import linearGradient from "theme/functions/linearGradient";

export function getSwitchComponents(theme: Theme): Components["MuiSwitch"] {
  // Теперь берем все из theme.palette
  const { white } = theme.palette.common;
  const gradients = theme.palette.gradients!; // у вас в augmentation гарантированно есть Palette.gradients
  const grey400 = theme.palette.grey[400];
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
        border: `${bw.thin} solid ${grey400}`,
      },
      track: {
        width: pxToRem(32),
        height: pxToRem(15),
        backgroundColor: grey400,
        border: `${bw.thin} solid ${grey400}`,
        opacity: 1,
      },
    },
  };
}
