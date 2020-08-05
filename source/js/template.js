"use strict";

var cardData = [
{
imgSrc: "img/sis-cities.png",
imgAlt: "sis-cities",
text: "SPA на React и Redux",
link: "https://grigoriy-golovin.github.io/six-cities",
},
{
imgSrc: "img/pixiel-hanter.png" ,
imgAlt: "sis-cities",
text: "Сайт - игра написанная на современном синтаксисе JS (ECMAScript 2015+) по паттерну MVP без framework. romvromevombwp,v0re0o,vpa,eca[e,p mp mpf ,f of k0 v, ro k poo k k0ok0ok pkr rkrwo",
link: "https://grigoriy-golovin.github.io/pixel-hunter",
},
{
imgSrc: "img/keksobooking.png",
imgAlt: "Keksbooking",
text: "Простой сайт на старом синтаксисе JS. ",
link: "https://grigoriy-golovin.github.io/Keksbooking",
},
{
imgSrc: "img/culture-news.png",
imgAlt: "culture-news",
text: "Сайт с гридами в разметке",
link: "https://grigoriy-golovin.github.io/culture-news",
}
]

var cardInsert = document.querySelector(".portfolio__list");
var templateCard = document
	.querySelector("template")
	.content.querySelector(".card");

var createSlid = function (data, template) {
	var slid = template.cloneNode(true);
	slid.querySelector("img").src = data.imgSrc;
	slid.querySelector("img").alt = data.imgAlt;
	slid.querySelector(".card__text").textContent = data.text;
	slid.querySelector(".card__link").href = data.link;
		return slid;
};


cardData.forEach((element) => {
	cardInsert.append(createSlid(element, templateCard))
});


