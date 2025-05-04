// theme/components/form/checkbox.ts
import { Components, Theme } from "@mui/material/styles";
import pxToRem from "theme/functions/pxToRem";
import linearGradient from "theme/functions/linearGradient";

/**
 * Generate style overrides for MuiCheckbox component.
 * @param theme - The MUI theme object
 * @returns Components['MuiCheckbox'] override configuration
 */
export function getCheckboxComponents(theme: Theme): Components["MuiCheckbox"] {
  const bw = theme.borders.borderWidth;
  const borderColor = theme.palette.divider; // use palette.divider for border color
  const checkedColor = theme.palette.info.main;

  return {
    defaultProps: { disableRipple: true },
    styleOverrides: {
      root: {
        "& .MuiSvgIcon-root": {
          width: pxToRem(20),
          height: pxToRem(20),
          color: theme.palette.background.paper,
          border: `${bw.thin} solid ${borderColor}`,
          borderRadius: pxToRem(5.6),
        },
        "&:hover": { backgroundColor: theme.palette.action.hover },
        "&.Mui-focusVisible": {
          border: `${bw.thick} solid ${checkedColor} !important`,
        },
      },
      colorPrimary: {
        color: bw.thin,
        "&.Mui-checked": {
          color: checkedColor,
          "& .MuiSvgIcon-root": {
            backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 20 20'..."), ${linearGradient(
              checkedColor,
              checkedColor
            )}`,
            borderColor: checkedColor,
          },
        },
      },
      colorSecondary: {
        color: bw.thin,
        "&.Mui-checked": {
          color: checkedColor,
          "& .MuiSvgIcon-root": {
            backgroundImage: `url("data:image/svg+xml,%3csvg viewBox='0 0 20 20'..."), ${linearGradient(
              checkedColor,
              checkedColor
            )}`,
            borderColor: checkedColor,
          },
        },
      },
    },
  };
}
