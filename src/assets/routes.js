/**
=========================================================
* Shepherd React - v2.1.0
=========================================================





 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

/** 
  All of the routes for the Shepherd React are added here,
  You can add a new route, customize the routes and delete the routes here.

  Once you add a new route on this file it will be visible automatically on
  the Navbar.

  For adding a new route you can follow the existing routes in the routes array.
  1. The `name` key is used for the name of the route on the Navbar.
  2. The `icon` key is used for the icon of the route on the Navbar.
  3. The `collapse` key is used for making a collapsible item on the Navbar that contains other routes
  inside (nested routes), you need to pass the nested routes inside an array as a value for the `collapse` key.
  4. The `route` key is used to store the route location which is used for the react router.
  5. The `href` key is used to store the external links location.
  6. The `component` key is used to store the component of its route.
  7. The `dropdown` key is used to define that the item should open a dropdown for its collapse items .
  8. The `description` key is used to define the description of
          a route under its name.
  9. The `columns` key is used to define that how the content should look inside the dropdown menu as columns,
          you can set the columns amount based on this key.
  10. The `rowsPerColumn` key is used to define that how many rows should be in a column.
*/

// @mui material components
import Icon from "@mui/material/Icon";

// @mui icons
import GitHubIcon from "@mui/icons-material/GitHub";

// Pages
import AboutUs from "layouts/pages/landing-pages/about-us";
import ContactUs from "layouts/pages/landing-pages/contact-us";
import Author from "layouts/pages/landing-pages/author";
import SignIn from "layouts/pages/authentication/sign-in";

// Sections
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
const routes = [
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

  // {
  //   name: "Бизнесу",
  //   icon: <CorporateFareIcon />,
  //   collapse: [
  //     {
  //       name: "Интеренет",
  //       description: "Интернет в офис",
  //       route: "/sections/page-sections/page-headers",
  //       component: <PageHeaders />,
  //     },
  //     {
  //       name: "Телефония",
  //       description: "Услуга IP телефонии",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "О продукте",
  //           route: "/sections/elements/avatars",
  //           component: <Avatars />,
  //         },

  //         {
  //           name: "Тарифы",
  //           route: "/sections/navigation/navbars",
  //           component: <Navbars />,
  //         },
  //         {
  //           name: "Многоканальный телефон",
  //           route: "/sections/navigation/nav-tabs",
  //           component: <NavTabs />,
  //         },
  //         {
  //           name: "Виртуальный АТС",
  //           route: "/sections/navigation/pagination",
  //           component: <Pagination />,
  //         },
  //         {
  //           name: "Тарифы серии Про",
  //           route: "/sections/navigation/pagination",
  //           component: <Pagination />,
  //         },
  //         {
  //           name: "Сервисные услуги",
  //           route: "/sections/navigation/pagination",
  //           component: <Pagination />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Видеонаблюдение",
  //       description: "Облачное видеонаблюдение",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "О продукте",
  //           route: "/sections/elements/avatars",
  //           component: <Avatars />,
  //         },

  //         {
  //           name: "Тарифы",
  //           route: "/sections/input-areas/inputs",
  //           component: <Inputs />,
  //         },
  //         {
  //           name: "Конфигуратор",
  //           route: "/sections/input-areas/forms",
  //           component: <Forms />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Аренда виртуального рабочего места",
  //       description: "Удаленная работа для бизнеса",
  //       route: "/sections/attention-catchers/alerts",
  //       component: <Alerts />,
  //     },
  //     {
  //       name: "Аренда виртуального сервера",
  //       description: "Самостоятельная установка, консультация",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "О продукте",
  //           route: "/sections/elements/avatars",
  //           component: <Avatars />,
  //         },
  //         {
  //           name: "Конфигуратор",
  //           route: "/sections/elements/badges",
  //           component: <Badges />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Размещение оборудования",
  //       description: "Вне зависимости от размера бизнеса",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "О продукте",
  //           route: "/sections/elements/avatars",
  //           component: <Avatars />,
  //         },
  //         {
  //           name: "Заявка на доступ в ЦОД",
  //           route: "/sections/elements/badges",
  //           component: <Badges />,
  //         },
  //       ],
  //     },
  //     {
  //       name: "Wifi авторизация",
  //       description: "Интернет для Ваших клиентов",
  //       dropdown: true,
  //       collapse: [
  //         {
  //           name: "О продукте",
  //           route: "/sections/elements/avatars",
  //           component: <Avatars />,
  //         },
  //         {
  //           name: "Заявка на доступ в ЦОД",
  //           route: "/sections/elements/badges",
  //           component: <Badges />,
  //         },
  //         {
  //           name: "Тарифы",
  //           route: "/sections/input-areas/inputs",
  //           component: <Inputs />,
  //         },
  //       ],
  //     },
  //   ],
  // },
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
      // {
      //   name: "Оптовые закупки",
      //   route: "/sections/navigation/nav-tabs",
      //   component: <NavTabs />,
      // },
      // {
      //   name: "Партнерская программа",
      //   route: "/sections/navigation/pagination",
      //   component: <Pagination />,
      // },
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
