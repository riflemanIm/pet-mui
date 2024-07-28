import React from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import YMap from "./YMap";

const API_KEY = "05f8d2ae-bd94-4329-b9f9-7351e2ec9627";
const data = [
  {
    id: 1,
    address: "ул. Сормовская, 177/1, павильон 10 ",
    workTime: "",
    name: "Зоотовары",
    coordinates: "45.032744, 39.094367",
    typeId: 10,
    phone: "79182703446",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    timeOffset: 0,
    email: "",
  },
  {
    id: 2,
    address: "Ул. Комарова, 21/1",
    workTime: "",
    name: "Хвостик",
    coordinates: "45.116163, 39.029037",
    phone: "+7 (918) 968-00-40",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    timeOffset: 0,
    email: "",
  },
  {
    id: 3,
    address: "ул. Покрышкина, 4/6",
    workTime: "",
    name: "Зоомаркет",
    coordinates: "45.102788, 38.972214",
    phone: "+7 (918) 187-56-34",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    timeOffset: 0,
    www: "zoomarketonline.ru",
  },
  {
    id: 4,
    address: "ул. Ильницкого, 12, п. г. т. Энем",
    workTime: "",
    name: "Зоорай",
    coordinates: "44.924348, 38.905900",
    phone: "+7 (989) 141-60-46",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    timeOffset: 0,
    www: "",
  },
  {
    id: 5,
    address: "ул. Гагарина, 73",
    workTime: "",
    name: "Зоомагазин Кот Бегемот",
    coordinates: "45.056893, 38.934547",
    phone: "+7 (909) 455-83-48",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 6,
    address: "Петра Метальникова, 3",
    workTime: "",
    name: "Зоозавр",
    coordinates: "45.093992, 39.005215",
    phone: "8 (800) 250-00-00",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 7,
    address: "ул. Генерала Трошева, 25, Краснодар (этаж цокольный)",
    workTime: "",
    name: "Мисс Мурка",
    coordinates: "45.062152, 39.041860",
    phone: "+7 (961) 586-81-99",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 8,
    address:
      "ул. Зиповская, 34Б, микрорайон Завод Измерительных Приборов, (павильон 16)",
    workTime: "",
    name: "Корма для животных",
    coordinates: "45.062986, 39.011291",
    phone: "+7 (908) 674-36-55",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 9,
    address:
      "ул. Толбухина, 122/4, Прикубанский внутригородской округ, микрорайон Славянский",
    workTime: "",
    name: "У Маруси",
    coordinates: "45.067710, 38.924217",
    phone: "+7 (964) 930-47-19",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 200,
    address: "Ул. Гарибальди, 36",
    workTime: "",
    name: "Рыбка Дома",
    coordinates: "55.668950, 37.559494",
    phone: "+7 (977) 336-96-77",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "метро Новые Черемушки",
    www: "ribdom.ru",
  },

  {
    id: 300,
    address: "Ул. Кирова, 18А",
    workTime: "ВЦ МедВет",
    name: "",
    coordinates: "55.437485, 37.749858",
    phone: "",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "Домодедово",
    www: "",
  },
  {
    id: 400,
    address: "Ул. Якира, 9",
    workTime: "",
    name: " Зооцентр Бивер",
    coordinates: "48.560673, 39.376366",
    phone: "",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 500,
    address: "ул. Юрия Гагарина, 33 а/1",
    workTime: "",
    name: "Зоомагазин",
    coordinates: "69.002107, 33.106503",
    phone: "+7 (902) 281-81-17",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 600,
    address: "ул. Маршала Жукова, 17А, Крымск",
    workTime: "",
    name: "ЛакШери",
    coordinates: "44.927775, 38.009579",
    phone: "+7 (928) 333-49-22",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 700,
    address: "ул. Яна Фабрициуса, 12, корп. 2, Сочи",
    workTime: "",
    name: "Кот и Пес",
    coordinates: "43.576611, 39.748789",
    phone: "+7 (918) 102-45-19",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 701,
    address: "Ул. Костромская, 88 (этаж 1)",
    workTime: "",
    name: "Зоомагазин Зооmix",
    coordinates: "43.455337, 39.958298",
    phone: "+7 (918) 606-70-70",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 800,
    address: "Ул. Парижской коммуны, 18А,",
    workTime: "",
    name: "Зоомагазин Мистер Хвост",
    coordinates: "44.865362, 38.153974",
    phone: "+7(918) 043‒45‒71, +7(989) 764‒12‒20",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "https://zoomagazin-abinsk-mister-hvost.clients.site/",
  },
  {
    id: 900,
    address: "Советская ул., 107, станица Новотитаровская",
    workTime: "",
    name: "Белый клык",
    coordinates: "45.241054, 38.969052",
    phone: "+7 (918) 941-37-97",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 1000,
    address: "Ул. Чернышевского, 201/Б",
    workTime: "",
    name: "Салон для животных ГЛАМУР",
    coordinates: "",
    phone: "+7 (928) 712-66-34",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
    www: "",
  },
  {
    id: 300,
    address: "",
    workTime: "",
    name: "",
    coordinates: "",
    phone: "",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "метро Новые Черемушки",
    www: "",
  },
  {
    id: 300,
    address: "",
    workTime: "",
    name: "",
    coordinates: "",
    phone: "",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "метро Новые Черемушки",
    www: "",
  },
];

const YandexMap = () => {
  const defaultMapZoom = 10;

  const center = ["45.032744", "39.094367"]; // moscow coordinates;

  return (
    <YMaps
      query={{
        load: "package.full",
        apikey: API_KEY,
      }}
    >
      <YMap
        options={{
          center,
          zoom: defaultMapZoom,
        }}
        data={data}
      />
    </YMaps>
  );
};

export default YandexMap;
