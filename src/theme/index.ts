// theme/index.ts
import { createTheme, ThemeOptions, Components } from "@mui/material/styles";

// Base theme definitions
import breakpoints from "theme/base/breakpoints";
import colors from "theme/base/colors";
import {
  typography,
  customSizes,
  customLineHeights,
} from "theme/base/typography";
import boxShadows from "theme/base/boxShadows";
import borders from "theme/base/borders";
import globals from "theme/base/globals";

// Component style generators
import { getContainedStyles } from "theme/components/button/contained";
import { getOutlinedStyles } from "theme/components/button/outlined";
import { getTextStyles } from "theme/components/button/text";
import list from "theme/components/list";
import listItem from "theme/components/list/listItem";
import listItemText from "theme/components/list/listItemText";
import card from "theme/components/card";
import cardMedia from "theme/components/card/cardMedia";
import cardContent from "theme/components/card/cardContent";
import iconButton from "theme/components/iconButton";
import input from "theme/components/form/input";
import inputLabel from "theme/components/form/inputLabel";
import inputOutlined from "theme/components/form/inputOutlined";
import textField from "theme/components/form/textField";
import menu from "theme/components/menu";
import menuItem from "theme/components/menu/menuItem";
import switchButton from "theme/components/form/switchButton";
import divider from "theme/components/divider";
import tableContainer from "theme/components/table/tableContainer";
import tableHead from "theme/components/table/tableHead";
import tableCell from "theme/components/table/tableCell";
import linearProgress from "theme/components/linearProgress";
import breadcrumbs from "theme/components/breadcrumbs";
import slider from "theme/components/slider";
import avatar from "theme/components/avatar";
import tooltip from "theme/components/tooltip";
import appBar from "theme/components/appBar";
import tabs from "theme/components/tabs";
import tab from "theme/components/tabs/tab";
import stepper from "theme/components/stepper";
import step from "theme/components/stepper/step";
import stepConnector from "theme/components/stepper/stepConnector";
import stepLabel from "theme/components/stepper/stepLabel";
import stepIcon from "theme/components/stepper/stepIcon";
import select from "theme/components/form/select";
import formControlLabel from "theme/components/form/formControlLabel";
import formLabel from "theme/components/form/formLabel";
import checkbox from "theme/components/form/checkbox";
import radio from "theme/components/form/radio";
import autocomplete from "theme/components/form/autocomplete";
import flatpickr from "theme/components/flatpickr";
import container from "theme/components/container";
import popover from "theme/components/popover";
import buttonBase from "theme/components/buttonBase";
import icon from "theme/components/icon";
import svgIcon from "theme/components/svgIcon";
import link from "theme/components/link";
import dialog from "theme/components/dialog";
import dialogTitle from "theme/components/dialog/dialogTitle";
import dialogContent from "theme/components/dialog/dialogContent";
import dialogContentText from "theme/components/dialog/dialogContentText";
import dialogActions from "theme/components/dialog/dialogActions";

// Module augmentation
declare module "@mui/material/styles" {
  interface Theme {
    boxShadows: typeof boxShadows;
    borders: typeof borders;
    customSizes: typeof customSizes;
    customLineHeights: typeof customLineHeights;
  }
  interface ThemeOptions {
    boxShadows?: typeof boxShadows;
    borders?: typeof borders;
    customSizes?: typeof customSizes;
    customLineHeights?: typeof customLineHeights;
  }
}

// 1. Create initial theme
const baseThemeOptions: ThemeOptions = {
  breakpoints: { ...breakpoints },
  palette: { ...colors },
  typography,
  customSizes,
  customLineHeights,
  boxShadows: { ...boxShadows },
  borders: { ...borders },
};

let theme = createTheme(baseThemeOptions);

// 2. Build components overrides after theme is available
const buttonOverrides: Components["MuiButton"]["styleOverrides"] = {
  root: theme.components?.MuiButton?.styleOverrides?.root || {},
  contained: getContainedStyles(theme).root,
  containedSizeSmall: getContainedStyles(theme).sizeSmall,
  containedSizeLarge: getContainedStyles(theme).sizeLarge,
  containedPrimary: getContainedStyles(theme).primary,
  containedSecondary: getContainedStyles(theme).secondary,
  outlined: getOutlinedStyles(theme).root,
  outlinedSizeSmall: getOutlinedStyles(theme).sizeSmall,
  outlinedSizeLarge: getOutlinedStyles(theme).sizeLarge,
  outlinedPrimary: getOutlinedStyles(theme).primary,
  outlinedSecondary: getOutlinedStyles(theme).secondary,
  text: getTextStyles(theme).root,
  textSizeSmall: getTextStyles(theme).sizeSmall,
  textSizeLarge: getTextStyles(theme).sizeLarge,
  textPrimary: getTextStyles(theme).primary,
  textSecondary: getTextStyles(theme).secondary,
};

const componentsOverrides: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      ...globals,
      ...flatpickr,
      ...container,
    },
  },
  MuiList: list,
  MuiListItem: listItem,
  MuiListItemText: listItemText,
  MuiCard: card,
  MuiCardMedia: cardMedia,
  MuiCardContent: cardContent,
  MuiButton: {
    defaultProps: { disableRipple: false },
    styleOverrides: buttonOverrides,
  },
  MuiIconButton: iconButton,
  MuiInput: input,
  MuiInputLabel: inputLabel,
  MuiOutlinedInput: inputOutlined,
  MuiTextField: textField,
  MuiMenu: menu,
  MuiMenuItem: menuItem,
  MuiSwitch: switchButton,
  MuiDivider: divider,
  MuiTableContainer: tableContainer,
  MuiTableHead: tableHead,
  MuiTableCell: tableCell,
  MuiLinearProgress: linearProgress,
  MuiBreadcrumbs: breadcrumbs,
  MuiSlider: slider,
  MuiAvatar: avatar,
  MuiTooltip: tooltip,
  MuiAppBar: appBar,
  MuiTabs: tabs,
  MuiTab: tab,
  MuiStepper: stepper,
  MuiStep: step,
  MuiStepConnector: stepConnector,
  MuiStepLabel: stepLabel,
  MuiStepIcon: stepIcon,
  MuiSelect: select,
  MuiFormControlLabel: formControlLabel,
  MuiFormLabel: formLabel,
  MuiCheckbox: checkbox,
  MuiRadio: radio,
  MuiAutocomplete: autocomplete,
  MuiPopover: popover,
  MuiButtonBase: buttonBase,
  MuiIcon: icon,
  MuiSvgIcon: svgIcon,
  MuiLink: link,
  MuiDialog: dialog,
  MuiDialogTitle: dialogTitle,
  MuiDialogContent: dialogContent,
  MuiDialogContentText: dialogContentText,
  MuiDialogActions: dialogActions,
};

// 3. Recreate theme with component overrides
theme = createTheme(theme, { components: componentsOverrides });

export default theme;
