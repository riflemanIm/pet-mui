import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import PersonIcon from "@mui/icons-material/Person";
import PetsIcon from "@mui/icons-material/Pets";
import Avatars from "layouts/sections/elements/avatars";
import Navbars from "layouts/sections/navigation/navbars";
import { ReactElement } from "react";

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
