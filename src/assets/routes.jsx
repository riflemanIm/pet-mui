import React from "react";
import BubbleChartIcon from "@mui/icons-material/BubbleChart";
import PersonIcon from "@mui/icons-material/Person";
import PetsIcon from "@mui/icons-material/Pets";
import Avatars from "layouts/sections/elements/avatars";
import Navbars from "layouts/sections/navigation/navbars";

const routes = [
  {
    name: "Кошки",
    icon: <PetsIcon />,
    route: "/catalog",
  },
  {
    name: "Собаки",
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
        route: "/partners",
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
        name: "Документы",
        description: "Лицензии и сертификаты",
        href: "/docs",
      },
      {
        name: "Производство",
        description: "Исключительно натуральные ингредиенты",
        href: "/production",
      },
      {
        name: "Хранение",
        description: "О защите персональных данных",
        href: "/keeping",
      },
      {
        name: "Контактная информация",
        description: "Получить консультацию",
        href: "/contacts",
      },
    ],
  },
];

export default routes;
