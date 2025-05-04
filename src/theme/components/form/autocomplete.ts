// theme/components/form/autocomplete.ts
import { Components, Theme } from '@mui/material/styles';
import { CSSObject } from '@mui/system';
import pxToRem from 'theme/functions/pxToRem';

export function getAutocompleteComponents(theme: Theme): Components['MuiAutocomplete'] {
  const boxShadow = theme.boxShadows.lg;
  const fontSize = theme.customSizes.sm;
  const textColor = theme.palette.text.primary;
  const bgColor = theme.palette.common.white;
  const transparentBg = theme.palette.background.paper;
  const borderRadius = theme.shape.borderRadius;

  return {
    styleOverrides: {
      popper: {
        boxShadow,
        padding: pxToRem(8),
        fontSize: pxToRem(fontSize),
        color: textColor,
        textAlign: 'left',
        backgroundColor: `${bgColor} !important`,
        borderRadius,
      } as CSSObject,
      paper: {
        boxShadow: 'none',
        backgroundColor: transparentBg,
      } as CSSObject,
      option: {
        padding: `${pxToRem(4.8)} ${pxToRem(16)}`,
        borderRadius,
        fontSize: pxToRem(fontSize),
        color: textColor,
        transition: 'background-color 300ms ease, color 300ms ease',
        '&:hover, &:focus, &.Mui-selected, &.Mui-selected:hover, &.Mui-selected:focus': {
          backgroundColor: theme.palette.action.hover,
          color: theme.palette.text.primary,
        },
        '&[aria-selected="true"]': {
          backgroundColor: `${theme.palette.action.hover} !important`,
          color: `${theme.palette.text.primary} !important`,
        },
      } as CSSObject,
      noOptions: {
        fontSize: pxToRem(fontSize),
        color: textColor,
      } as CSSObject,
      groupLabel: {
        color: theme.palette.text.secondary,
        fontWeight: theme.typography.fontWeightMedium,
      } as CSSObject,
      loading: {
        fontSize: pxToRem(fontSize),
        color: textColor,
      } as CSSObject,
      tag: {
        display: 'flex',
        alignItems: 'center',
        height: 'auto',
        padding: pxToRem(4),
        backgroundColor: theme.palette.primary.light,
        color: bgColor,
        '& .MuiChip-label': {
          lineHeight: 1.2,
          padding: `0 ${pxToRem(10)} 0 ${pxToRem(4)}`,
        },
        '& .MuiSvgIcon-root': {
          color: bgColor,
          marginRight: 0,
        },
      } as CSSObject,
    },
  };
}
