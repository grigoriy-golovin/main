"use strict";

var cardData = [
  {
    imgSrc: "img/sis-cities.png",
    imgAlt: "sis-cities",
    title: "Sis cities",
    link: "https://grigoriy-golovin.github.io/six-cities",
    description: `SPA на React. Современный сервис
     для путешественников, которые не хотят переплачивать за аренду жилья.
     В приложении можно получить актуальный
      список предложений по аренде в одном из шести популярных городов.
      Сортировка объектов и подробное
       описание каждого из них помогут быстро
       выбрать оптимальный вариант жилья.
       Авторизованные пользователи могут
        оставить отзыв и добавить приложение в избранное.`,
    techno: `React, Jest, Enzyme, Axios, React Router, Redux, Thunk, Reselect`,
  },
  {
    imgSrc: "img/pixiel-hanter.png",
    imgAlt: "pixiel-hanter",
    title: "Pixiel hanter",
    link: "https://grigoriy-golovin.github.io/pixel-hunter",
    description: "",
    techno: "",
  },
  {
    imgSrc: "img/keksobooking.png",
    imgAlt: "Keksbooking",
    title: "Keksbooking",
    link: "https://grigoriy-golovin.github.io/Keksbooking",
    description: `Сервис размещения объявлений об аренде
     недвижимости в Токио. Пользователи делятся информацией
     о своём объекте недвижимости, размещают фотографии, указывают
     адрес, перемещая метку по карте города. Кроме этого, можно
      посмотреть на объявления,
     размещённые другими пользователями.`,
    techno: "DOM API, XMLHttpRequest, ",
  },
  {
    imgSrc: "img/culture-news.png",
    imgAlt: "culture-news",
    title: "Culture news",
    link: "https://grigoriy-golovin.github.io/culture-news",
    description: "",
    techno: "",
  },
  {
    imgSrc: "img/pink.png",
    imgAlt: "pink",
    title: "Pink",
    link: "https://grigoriy-golovin.github.io/pink",
    description: "",
    techno: "",
  },
  {
    imgSrc: "img/light.png",
    imgAlt: "light",
    title: "Light",
    link: "https://grigoriy-golovin.github.io/light",
    linkCode: "https://github.com/grigoriy-golovin/trialWork",
    description: "",
    techno: "",
  },
];

var cardInsert = document.querySelector(".portfolio__list");
var templateCard = document
  .querySelector("template")
  .content.querySelector(".card");

var createSlid = function (data, template) {
  var slid = template.cloneNode(true);
  slid.querySelector("img").src = data.imgSrc;
  slid.querySelector("img").alt = data.imgAlt;
  slid.querySelector(".card__title").textContent = data.title;
  slid.querySelector(".card__description").textContent = data.description;
  slid.querySelector(".card__text-techno").textContent = data.techno;
  slid.querySelector(".card__link--site").href = data.link;
  slid.querySelector(".card__link--code").href = data.linkCode;

  slid.querySelector("img").onclick = () => {
    slid.classList.add(`card--active`);
  };

  slid.querySelector(".card__but-close").onclick = () => {
    slid.classList.remove(`card--active`);
  };

  return slid;
};

cardData.forEach((element) => {
  cardInsert.append(createSlid(element, templateCard));
});
