import React from "react";
import Rgm from "./Rgm";
import isEmpty from "../../helpers";
const API_KEY = "e1afe889-6f8b-406b-bdad-8c397ddabcef";
const dataRaw = [
  {
    id: 179,
    title: "Филиал Петровка",
    fmOrgId: 1,
    code: "MobiApp_Demo",
    address: "г. Москва, ул. Троицкая, д.1, корп.1, cтр.1",
    workTime: "пн-пт 08:00–21:00\r\nсб,вс 09:00–15:00",
    name: "Медицинский центр Петровка",
    coordinates: "55.751427, 37.618878",
    typeId: 10,
    phone: "74957777788",
    ageGroup: "Adult",
    description:
      "Крупнейша сеть лечебно-профилактических центров в Москве, предоставляющих полный комплекс услуг по профилактике, диагностике, лечению различных заболеваний, а также реабилитации.",
    nearbyTransportHubs: "м. Библиотека имени Ленина",
    timeOffset: 0,
    email: "ermakov@postmodern.ru",
    brandId: 3,
    isAnonymousVisitsProhibited: false,
    imageCount: 2,
    isVisible: true,
  },
  {
    id: 180,
    title: "Филиал Таганка",
    fmOrgId: 407227,
    code: "MobiApp_Demo_F1",
    address: "г. Москва, ул. Таганская, д.38, cтр.83",
    workTime: "пн-пт 07:00–20:00\r\nсб 07:30–19:00\r\nвс 07:30–18:00",
    name: "Таганка",
    coordinates: "55.741784, 37.655894",
    phone: "74955555555",
    ageGroup: "Adult",
    description:
      "В клинике на Таганке можно пройти комплексное лечение заболеваний большинства направлений. В наших медицинских центрах медицинскую помощь оказывают специалисты как самых востребованных медицинских специальностей (терапевты, неврологи, кардиологи, урологи, гинекологи, офтальмологи, оториноларингологи и др.), так и редких (генетики, репродуктологи, эмбриологи, гепатологи и др.). В детских отделениях работают врачи, специализирующиеся на лечении детей с первых дней жизни до совершеннолетия.",
    nearbyTransportHubs: "м. Таганская",
    timeOffset: 0,
    email: "pleshakov@postmodern.ru",
    brandId: 3,
    isAnonymousVisitsProhibited: false,
    imageCount: 0,
    isVisible: true,
  },
];
function GoogleMap() {
  const d = (dataRaw || []).find(
    (item) => item?.coordinates != null && item?.coordinates !== ""
  );

  const [lat, lng] =
    d != null ? d.coordinates.split(", ") : ["55.751244", "37.618423"]; // moscow coordinates;

  const ZOOM = 10;
  const options = {
    zoom: ZOOM,
    center: {
      lat: parseFloat(lat),
      lng: parseFloat(lng),
    },
    gestureHandling: "greedy",
    clickableIcons: false,
    name: "cntr",
    fullscreenControl: false,
  };

  const data = !isEmpty(dataRaw)
    ? dataRaw.map((item) => {
        if (item?.coordinates != null) return item;
      })
    : [];

  //  console.log('clinics==', data, 'lat, lng', lat, lng);
  return <Rgm data={data} options={options} mapsKey={API_KEY} />;
}

export default GoogleMap;
