import React from "react";
import { YMaps } from "@pbe/react-yandex-maps";
import YMap from "./YMap";

const API_KEY = "05f8d2ae-bd94-4329-b9f9-7351e2ec9627";
const data = [
  {
    id: 1,
    address: "Сормовская улица, 177/1",
    workTime: "пн-пт 08:00–21:00\r\nсб,вс 09:00–15:00",
    name: "Сормовская",
    coordinates: "45.032744, 39.094367",
    typeId: 10,
    phone: "74957777788",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "м. Библиотека имени Ленина",
    timeOffset: 0,
    email: "ermakov@postmodern.ru",
  },
  {
    id: 2,
    address: "улица имени В.М. Комарова, 21/1к1",
    workTime: "пн-пт 07:00–20:00\r\nсб 07:30–19:00\r\nвс 07:30–18:00",
    name: "на Комарова",
    coordinates: "45.117189, 39.029383",
    phone: "74955555555",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "м. Таганская",
    timeOffset: 0,
    email: "pleshakov@postmodern.ru",
  },
  {
    id: 3,
    address: "улица Александра Покрышкина, 4/6",
    workTime: "пн-пт 07:00–20:00\r\nсб 07:30–19:00\r\nвс 07:30–18:00",
    name: "на Покрышкина",
    coordinates: "45.102788, 38.972214",
    phone: "74955555555",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "м. Таганская",
    timeOffset: 0,
    email: "pleshakov@postmodern.ru",
  },
  {
    id: 3,
    address: "улица Ильницкого, 12",
    workTime: "пн-пт 07:00–20:00\r\nсб 07:30–19:00\r\nвс 07:30–18:00",
    name: "на Ильницкого",
    coordinates: "44.924348, 38.905900",
    phone: "74955555555",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "м. Таганская",
    timeOffset: 0,
    email: "pleshakov@postmodern.ru",
  },
  {
    id: 300,
    address: "Ул. Гарибальди, 36",
    workTime: "пн-пт 07:00–20:00\r\nсб 07:30–19:00\r\nвс 07:30–18:00",
    name: "Зоомагазин Рыбка Дома",
    coordinates: "55.64185150247605, 37.53207545372277",
    phone: "74955555555",

    description:
      "Здесь можно купить полный ассортимент нашей продукции, а также аксессуары и сувениры",
    nearbyTransportHubs: "м. Таганская",
    email: "pleshakov@postmodern.ru",
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
