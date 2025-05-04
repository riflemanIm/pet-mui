// theme/index.ts
import {
  createTheme,
  ThemeOptions,
  Components,
  Theme,
} from "@mui/material/styles";

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
import boxShadow from "theme/functions/boxShadow";
import hexToRgb from "theme/functions/hexToRgb";
import linearGradient from "theme/functions/linearGradient";
import pxToRem from "theme/functions/pxToRem";
import rgba from "theme/functions/rgba";

// Component style generators
import { getButtonComponents } from "theme/components/button";

import { getListComponents } from "theme/components/list/index";
import { getListItemComponents } from "theme/components/list/listItem";
import { getListItemTextComponents } from "theme/components/list/listItemText";
import { getCardComponents } from "theme/components/card/index";
import { getCardMediaComponents } from "theme/components/card/cardMedia";
import { getCardContentComponents } from "theme/components/card/cardContent";
import { getIconButtonComponents } from "theme/components/iconButton";
import { getInputComponents } from "theme/components/form/input";
import { getInputLabelComponents } from "theme/components/form/inputLabel";
import { getOutlinedInputComponents } from "theme/components/form/inputOutlined";
import { getTextFieldComponents } from "theme/components/form/textField";
import { getMenuComponents } from "theme/components/menu/index";
import { getMenuItemComponents } from "theme/components/menu/menuItem";
import { getSwitchComponents } from "theme/components/form/switchButton";
import { getDividerComponents } from "theme/components/divider";
import { getTableContainerComponents } from "theme/components/table/tableContainer";
import { getTableHeadComponents } from "theme/components/table/tableHead";
import { getTableCellComponents } from "theme/components/table/tableCell";
import { getLinearProgressComponents } from "theme/components/linearProgress";
import { getBreadcrumbsComponents } from "theme/components/breadcrumbs";
import { getSliderComponents } from "theme/components/slider";
import { getAvatarComponents } from "theme/components/avatar";
import { getTooltipComponents } from "theme/components/tooltip";
import { getAppBarComponents } from "theme/components/appBar";
import { getTabsComponents } from "theme/components/tabs/index";
import { getTabComponents } from "theme/components/tabs/tab";
import { getStepperComponents } from "theme/components/stepper/index";
import { getStepComponents } from "theme/components/stepper/step";
import { getStepConnectorComponents } from "theme/components/stepper/stepConnector";
import { getStepLabelComponents } from "theme/components/stepper/stepLabel";
import { getStepIconComponents } from "theme/components/stepper/stepIcon";
import { getSelectComponents } from "theme/components/form/select";
import { getFormControlLabelComponents } from "theme/components/form/formControlLabel";
import { getFormLabelComponents } from "theme/components/form/formLabel";
import { getCheckboxComponents } from "theme/components/form/checkbox";
import { getRadioComponents } from "theme/components/form/radio";
import { getAutocompleteComponents } from "theme/components/form/autocomplete";
import { getPopoverComponents } from "theme/components/popover";
import { getButtonBaseComponents } from "theme/components/buttonBase";
import { getIconComponents } from "theme/components/icon";
import { getSvgIconComponents } from "theme/components/svgIcon";
import { getLinkComponents } from "theme/components/link";
import { getDialogComponents } from "theme/components/dialog/index";
import flatpickr from "theme/components/flatpickr";
import container from "theme/components/container";
// Module augmentation
declare module "@mui/material/styles" {
  interface Theme {
    boxShadows: typeof boxShadows;
    borders: typeof borders;
    customSizes: typeof customSizes;
    customLineHeights: typeof customLineHeights;
    functions: {
      boxShadow: typeof import("theme/functions/boxShadow").default;
      hexToRgb: typeof import("theme/functions/hexToRgb").default;
      linearGradient: typeof import("theme/functions/linearGradient").default;
      pxToRem: typeof import("theme/functions/pxToRem").default;
      rgba: typeof import("theme/functions/rgba").default;
    };
  }
  interface ThemeOptions {
    boxShadows?: typeof boxShadows;
    borders?: typeof borders;
    customSizes?: typeof customSizes;
    customLineHeights?: typeof customLineHeights;
    functions?: {
      boxShadow?: typeof import("theme/functions/boxShadow").default;
      hexToRgb?: typeof import("theme/functions/hexToRgb").default;
      linearGradient?: typeof import("theme/functions/linearGradient").default;
      pxToRem?: typeof import("theme/functions/pxToRem").default;
      rgba?: typeof import("theme/functions/rgba").default;
    };
  }
}

// 1. Create initial theme
const baseThemeOptions: ThemeOptions = {
  breakpoints,
  palette: colors,
  typography,
  customSizes,
  customLineHeights,
  boxShadows,
  borders,
  functions: {
    boxShadow,
    hexToRgb,
    linearGradient,
    pxToRem,
    rgba,
  },
};

let theme: Theme = createTheme(baseThemeOptions);

// 2. Build component overrides after theme is available
const componentsOverrides: Components = {
  MuiCssBaseline: {
    styleOverrides: {
      // ваши глобальные стили
      ...globals,
      // flatpickr и container уже являются plain-objects с CSS селекторами
      ...flatpickr,
      ...container,
    },
  },
  MuiList: getListComponents(theme),
  MuiListItem: getListItemComponents(theme),
  MuiListItemText: getListItemTextComponents(theme),
  MuiCard: getCardComponents(theme),
  MuiCardMedia: getCardMediaComponents,
  MuiCardContent: getCardContentComponents,
  MuiButton: getButtonComponents(theme),
  MuiIconButton: getIconButtonComponents(theme),
  MuiInput: getInputComponents(theme),
  MuiInputLabel: getInputLabelComponents(theme),
  MuiOutlinedInput: getOutlinedInputComponents(theme),
  MuiTextField: getTextFieldComponents(theme),
  MuiMenu: getMenuComponents(theme),
  MuiMenuItem: getMenuItemComponents(theme),
  MuiSwitch: getSwitchComponents(theme),
  MuiDivider: getDividerComponents(theme),
  MuiTableContainer: getTableContainerComponents(theme),
  MuiTableHead: getTableHeadComponents(theme),
  MuiTableCell: getTableCellComponents(theme),
  MuiLinearProgress: getLinearProgressComponents(theme),
  MuiBreadcrumbs: getBreadcrumbsComponents(theme),
  MuiSlider: getSliderComponents(theme),
  MuiAvatar: getAvatarComponents(),
  MuiTooltip: getTooltipComponents(theme),
  MuiAppBar: getAppBarComponents(),
  MuiTabs: getTabsComponents(theme),
  MuiTab: getTabComponents(theme),
  MuiStepper: getStepperComponents(theme),
  MuiStep: getStepComponents(),
  MuiStepConnector: getStepConnectorComponents(theme),
  MuiStepLabel: getStepLabelComponents(theme),
  MuiStepIcon: getStepIconComponents(theme),
  MuiSelect: getSelectComponents(theme),
  MuiFormControlLabel: getFormControlLabelComponents(theme),
  MuiFormLabel: getFormLabelComponents(theme),
  MuiCheckbox: getCheckboxComponents(theme),
  MuiRadio: getRadioComponents(theme),
  MuiAutocomplete: getAutocompleteComponents(theme),
  MuiPopover: getPopoverComponents(theme),
  MuiButtonBase: getButtonBaseComponents(),
  MuiIcon: getIconComponents(),
  MuiSvgIcon: getSvgIconComponents(theme),
  MuiLink: getLinkComponents(theme),
  ...getDialogComponents(theme),
};

// 3. Recreate theme with component overrides
theme = createTheme(theme, { components: componentsOverrides });

export default theme;
