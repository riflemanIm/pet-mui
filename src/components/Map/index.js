import React, { useState } from "react";
import Main from "layouts/Main";
import Container from "components/Container";
import YandexMap from "components/YandexMap";
import Box from "@mui/material/Box";

import Dropdown from "./components/Dropdown";
import Headline from "components/Headline";

const dataCities = [
  { value: "45.032744, 39.094367", label: "Краснодар" },
  { value: "55.668950, 37.559494", label: "Москва" },
  { value: "55.437485, 37.749858", label: "Домодедово" },
  { value: "48.560673, 39.376366", label: "Луганск" },
  { value: "69.002107, 33.106503", label: "Мурманск" },
  { value: "44.927775, 38.009579", label: "Крымск" },
  { value: "43.576611, 39.748789", label: "Сочи" },
  { value: "44.865362, 38.153974", label: "Абинск" },
  { value: "45.241054, 38.969052", label: "Новотитаровская" },
  { value: "43.501088, 43.602484", label: "Нальчик" },
  { value: "45.253295, 38.117404", label: "Славянск‑на‑Кубани" },
  { value: "59.855188, 30.150229", label: "Санкт-Петербург" },
  { value: "44.562422, 38.081480", label: "Геленджик" },
  { value: "48.488112, 135.079355", label: "Хабаровск " },
  { value: "61.766058, 34.291326", label: "Петрозаводск" },
];
const data = [
  {
    id: 1,
    address: "ул. Сормовская, 177/1, павильон 10 ",
    workTime: "",
    name: "Зоотовары",
    coordinates: "45.032744, 39.094367",
    typeId: 10,
    phone: "+7(918) 270-34-46",

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
    www: "https://zoomarketonline.ru",
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
    www: "https://ribdom.ru",
  },

  {
    id: 300,
    address: "Ул. Кирова, 18А",
    workTime: "ВЦ МедВет",
    name: "",
    coordinates: "55.437485, 37.749858",
    phone: "+7 (495) 120-48-84",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "Домодедово",
  },
  {
    id: 400,
    address: "Ул. Якира, 9",
    workTime: "",
    name: "Зооцентр Бивер",
    coordinates: "48.560673, 39.376366",
    phone: "",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
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
  },
  {
    id: 600,
    address: "ул. Маршала Жукова, 17А",
    workTime: "",
    name: "ЛакШери",
    coordinates: "44.927775, 38.009579",
    phone: "+7 (928) 333-49-22",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
  },
  {
    id: 700,
    address: "ул. Яна Фабрициуса, 12, корп. 2",
    workTime: "",
    name: "Кот и Пес",
    coordinates: "43.576611, 39.748789",
    phone: "+7 (918) 102-45-19",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
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
  },
  {
    id: 1000,
    address: "Ул. Чернышевского, 201/Б",
    workTime: "",
    name: "Салон для животных ГЛАМУР",
    coordinates: "43.501088, 43.602484",
    phone: "+7 (928) 712-66-34",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "",
  },
  {
    id: 1100,
    address: "Ул. Батарейная, 259а",
    workTime: "",
    name: "MR. ZOO",
    coordinates: "45.253295, 38.117404",
    phone: "+7 (918) 062-11-86",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "метро Новые Черемушки",
  },
  {
    id: 1200,
    address: "наб. Матисова канала, 3",
    workTime: "",
    name: "Pets Lab",
    coordinates: "59.855188, 30.150229",
    phone: "+7 (921) 946-35-69",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "метро Новые Черемушки",
  },

  {
    id: 1300,
    address: "Ул. Херсонская, 27",
    workTime: "",
    name: "Зоомагазин",
    coordinates: "44.562422, 38.081480",
    phone: "+7 (989) 764-17-71",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "метро Новые Черемушки",
  },

  {
    id: 1310,
    address: "Ул. Херсонская, 53А",
    workTime: "",
    name: "Зоомагазин",
    coordinates: "44.561668, 38.083007",
    phone: "+7 (989) 764-17-71",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "метро Новые Черемушки",
  },

  {
    id: 1400,
    address: "ул. Московская, 3",
    workTime: "",
    name: "Хаскошоп",
    coordinates: "48.488112, 135.079355",
    phone: "+7 (914) 541-00-02",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "метро Новые Черемушки",
  },

  {
    id: 1500,
    address: "проезд Алексея Афанасьева, 5",
    workTime: "",
    name: "Lodo",
    coordinates: "61.766058, 34.291326",
    phone: "+7 (900) 464-00-66",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "метро Новые Черемушки",
  },
];

const Contact = () => {
  const [coordinates, setCoordinates] = useState(dataCities[0].value);
  const defaultMapZoom = coordinates === "45.032744, 39.094367" ? 7 : 15;
  return (
    <Main>
      <Container>
        <Headline
          head="Мы здесь!"
          subhead1="Адреса магазинов, в которых нас можно найти:"
        />
        <Box textAlign="center" mt={3}>
          <Dropdown
            options={dataCities}
            coordinates={coordinates}
            setCoordinates={setCoordinates}
          />
        </Box>
      </Container>
      <Box style={{ width: "100%", height: 500 }}>
        <YandexMap
          coordinates={coordinates}
          data={data}
          defaultMapZoom={defaultMapZoom}
        />
      </Box>
    </Main>
  );
};

export default Contact;
