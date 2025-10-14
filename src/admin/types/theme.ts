/* eslint-disable */
// material-ui
import { SimplePaletteColorOptions } from '@mui/material/styles';
import { ColorPartial } from '@mui/material/styles/createPalette';

// ==============================|| DEFAULT THEME - TYPES  ||============================== //

type ExtendedPaletteColorOptions = SimplePaletteColorOptions & {
  lighter?: string;
  100?: string;
  200?: string;
  300?: string;
  400?: string;
  500?: string;
  600?: string;
  700?: string;
  800?: string;
  900?: string;
  darker?: string;
  A100?: string;
  A200?: string;
  A300?: string;
  A400?: string;
  A700?: string;
};

export type PaletteThemeProps = {
  primary: ExtendedPaletteColorOptions;
  secondary: ExtendedPaletteColorOptions;
  error: ExtendedPaletteColorOptions;
  warning: ExtendedPaletteColorOptions;
  info: ExtendedPaletteColorOptions;
  success: ExtendedPaletteColorOptions;
  grey: ColorPartial;
};

export type CustomShadowProps = {
  button: string;
  text: string;
  z1: string;
  primary: string;
  primaryButton: string;
  secondary: string;
  secondaryButton: string;
  error: string;
  errorButton: string;
  warning: string;
  warningButton: string;
  info: string;
  infoButton: string;
  success: string;
  successButton: string;
  grey: string;
  greyButton: string;
};
