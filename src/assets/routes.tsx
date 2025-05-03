import { ReactElement } from "react";
import Icon from "@mui/material/Icon";
import GitHubIcon from "@mui/icons-material/GitHub";
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";
import PageHeaders from "layouts/sections/page-sections/page-headers";
import Features from "layouts/sections/page-sections/featuers";
import Navbars from "layouts/sections/navigation/navbars";
import NavTabs from "layouts/sections/navigation/nav-tabs";
import Pagination from "layouts/sections/navigation/pagination";
import Inputs from "layouts/sections/input-areas/inputs";
import Forms from "layouts/sections/input-areas/forms";
import Alerts from "layouts/sections/attention-catchers/alerts";
import Modals from "layouts/sections/attention-catchers/modals";
import TooltipsPopovers from "layouts/sections/attention-catchers/tooltips-popovers";
import Avatars from "layouts/sections/elements/avatars";
import Badges from "layouts/sections/elements/badges";
import BreadcrumbsEl from "layouts/sections/elements/breadcrumbs";
import Buttons from "layouts/sections/elements/buttons";
import Dropdowns from "layouts/sections/elements/dropdowns";
import ProgressBars from "layouts/sections/elements/progress-bars";
import Toggles from "layouts/sections/elements/toggles";
import Typography from "layouts/sections/elements/typography";
import PersonIcon from "@mui/icons-material/Person";
import CorporateFareIcon from "@mui/icons-material/CorporateFare";
import InfoIcon from "@mui/icons-material/Info";
import LoginIcon from "@mui/icons-material/Login";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import PetsIcon from "@mui/icons-material/Pets";

export interface RouteItem {
  name: string;
  icon?: ReactElement;
  route?: string;
  href?: string;
  component?: ReactElement;
  description?: string;
  dropdown?: boolean;
  collapse?: RouteItem[];
  columns?: number;
  rowsPerColumn?: number;
}

const routes: RouteItem[] = [
  {
    name: "Кошки",
    icon: <PetsIcon />,
    route: "/catalog",
  },
  {
    name: "Coбаки",
    icon: <PetsIcon />,
    route: "/catalog",
  },
  {
    name: "Партнерам",
    icon: <PersonIcon />,
    dropdown: true,
    collapse: [
      {
        name: "Заводчикам",
        description: "Промо-акции",
        route: "/sections/elements/avatars",
        component: <Avatars />,
      },
      {
        name: "Компаниям",
        description: "Сотрудничество юр. лицами",
        route: "/sections/navigation/navbars",
        component: <Navbars />,
      },
    ],
  },
  {
    name: "О Нас",
    icon: <BubbleChartIcon />,
    collapse: [
      {
        name: "Наша компания",
        description: "Мы специализируемся на производстве и продаже",
        href: "/about",
      },
      {
        name: "Лицензии",
        description: "Лицензии и сертификаты",
        href: "https://shepherd-pet.ru/learning-lab/react/quick-start/material-kit/",
      },
      {
        name: "Производство",
        description: "Исключительно натуральные ингредиенты",
        href: "https://shepherd-pet.ru/learning-lab/react/colors/material-kit/",
      },
      {
        name: "Хранение",
        description: "О защите персональных данных",
        href: "https://shepherd-pet.ru/learning-lab/react/alerts/material-kit/",
      },
      {
        name: "Контактная информация",
        description: "Получить консультацию",
        href: "https://shepherd-pet.ru/learning-lab/react/datepicker/material-kit/",
      },
    ],
  },
];

export default routes;
