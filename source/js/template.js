"use strict";

// mock

var articleData = [
	{
		isNew: true,
		image: "hotel",
		title: "Подводный отель",
		text:
			"Как известно, Дубай – город контрастов. Самые революционные и фантастические мечты архитекторов способен воплотить в жизнь этот мегаполис, построенный на нефти и за счет нефти",
	},
	{
		isNew: false,
		image: "mount",
		title: "Горы прекрасны",
		text:
			"Таким образом консультация с широким активом представляет собой интересный эксперимент проверки дальнейших направлений развития. Задача организации, в особенности же дальнейшее",
	},
	{
		isNew: false,
		image: "kite",
		title: "Поймай ветер",
		text:
			"Значимость этих проблем настолько очевидна, что укрепление и развитие структуры способствует подготовки и реализации соответствующий условий активизации. Разнообразный и богатый",
	},
	{
		isNew: true,
		image: "foot",
		title: "Вкус жизни",
		text:
			"Равным образом рамки и место обучения кадров влечет за собой процесс внедрения и модернизации дальнейших направлений развития. Задача организации, в особенности же сложившаяся",
	},
	{
		isNew: false,
		image: "dogs",
		title: "Друг человека",
		text:
			"Идейные соображения высшего порядка, а также реализация намеченных плановых заданий представляет собой интересный эксперимент проверки существенных финансовых и административных",
	},
];

var articleInsert = document.querySelector("#articleInsert");
var templateArticle = document
	.querySelector("template")
	.content.querySelector("#templateArticle");

var createSlid = function (data) {
	var slid = templateArticle.cloneNode(true);
	if (data.isNew) {
		slid.classList.add("article--new");
	}
	slid.querySelector("source").srcset = "img/" + data.image + "-desktop@1x.jpg";
	slid.querySelector("img").srcset = "img/" + data.image + "-mobile@1x.jpg";
	slid.querySelector(".article__titel").textContent = data.title;
	slid.querySelector(".article__text").textContent = data.text;
	slid.removeAttribute("id");
	return slid;
};

for (var i = 0; i < articleData.length; i++) {
	articleInsert.append(createSlid(articleData[i]));
}

var newsData = [
	{
		image: "img/birds.jpg",
		title: "Новости культуры России и всего мира",
		text:
			"В минувшие выходные в Москве на фестивале «Оберег» вручили первую премию Russian World Music Awards",
	},
	{
		image: "img/monument.jpg",
		title: "Открытие нового памятника Евгению Леонову",
		text: "10 сентября в 15:00 был открыт памятник писателю",
	},
	{
		image: "img/writer.jpg",
		title: "Беседы с писателями",
		text: "Русские писатели говорят о важности искусства",
	},
	{
		image: "img/patrik.jpg",
		title: "День и ночь св. Патрика: встреча старых друзей",
		text: "Не Джойсом единым живет Ирландия!",
	},
];

var newsInsert = document.querySelector("#newsInsert");
var templateNews = document
	.querySelector("template")
	.content.querySelector("#templateNews");

var createNews = function (data) {
	var item = templateNews.cloneNode(true);
	item.querySelector(".news__item-img").src = data.image;
	item.querySelector(".news__item-title").textContent = data.title;
	item.querySelector(".news__item-text").textContent = data.text;
	item.removeAttribute("id");
	return item;
};

for (var i = 0; i < newsData.length; i++) {
	newsInsert.appendChild(createNews(newsData[i]));
}

var reviawsData = [
	{
		image: "img/monparas.jpg",
		title: "«Шальные годы» Монпарнаса",
		text:
			"В Музее изобразительных искусств имени Пушкина с 29 сентября по 29 ноября проходит выставка «Шальные годы Монпарнаса»",
	},
	{
		image: "img/arms.jpg",
		title: "Анатомия за 30 секунд",
		text: "Сейчас, когда мир открыт нараспашку для человека и его познавательных изысканий, интерес к научно-популярной литературе заметно вырос",
	},
	{
		image: "img/ballerina.jpg",
		title: "Русские балетные сезоны",
		text:
			"В Новом Иерусалиме стартовал необычный культурно-развлекательный спектакль, который покажут в новом театре",
	},
	{
		image: "img/actors.jpg",
		title: "Сферические чудаки",
		text:
			"Корреспондентам «Культурного обозревателя» посчастливилось побывать в театре «Сфера» на премьере спектакля «Чудаки и зануды»",
	},
];

var reviawsInsert = document.querySelector("#reviawsInsert");
var templateReviaws = document
	.querySelector("template")
	.content.querySelector(".reviaws__item");

var createReviaws = function (data) {
	var item = templateReviaws.cloneNode(true);
	item.querySelector(".reviaws__item-img").src = data.image;
	item.querySelector(".reviaws__item-title").textContent = data.title;
	item.querySelector(".reviaws__item-text").textContent = data.text;
	item.removeAttribute("id");
	return item;
};

for (var i = 0; i < reviawsData.length; i++) {
	reviawsInsert.appendChild(createReviaws(reviawsData[i]));
}

var linkArticleData = [
	{
		image: "img/wristwatch.jpg",
		title: "как все успевать",
		link: "#",
	},
	{
		image: "img/canyon.jpg",
		title: "Удивительный каньон",
		link: "#",
	},
	{
		image: "img/bridge.jpg",
		title: "Мост",
		link: "#",
	},
	{
		image: "img/aircraft.jpg",
		title: "Высший пилотаж",
		link: "#",
	},
	{
		image: "img/canyon.jpg",
		title: "Удивительный каньон",
		link: "#",
	},
];



var linkArticleInsert = document.querySelector(".link-article__list");
var templateLinkArticle = document
	.querySelector("template")
	.content.querySelector(".link-article__item");

var createLinkArticle = function (data) {
	var item = templateLinkArticle.cloneNode(true);
	item.querySelector(".link-article__img").src = data.image;
	item.querySelector(".link-article__title").textContent = data.title;
	item.querySelector(".link-article__link").href = data.link;
	return item;
};

for (var i = 0; i < linkArticleData.length; i++) {
	linkArticleInsert.appendChild(createLinkArticle(linkArticleData[i]));
}

var linkEventData = [
	{
		image: "img/balloons.jpg",
		imgIsLight: true,
		title: "ВОЗДУШНЫЕ ШАРЫ",
		link: "#",
	},
	{
		image: "img/photosession.jpg",
		imgIsLight: false,
		title: "НЕОБЫЧНАЯ ФОТОСЕССИЯ",
		link: "#",
	},
	{
		image: "img/bird.jpg",
		imgIsLight: false,
		title: "Выставка птиц",
		link: "#",
	},
];



var linkEventInsert = document.querySelector(".link-event__list");
var templateLinkEvent = document
	.querySelector("template")
	.content.querySelector(".link-event__item");

var createLinkEvent = function (data) {
	var item = templateLinkEvent.cloneNode(true);
	item.querySelector(".link-event__img").src = data.image;
	item.querySelector(".link-event__title").textContent = data.title;
	item.querySelector(".link-event__link").href = data.link;
	if (data.imgIsLight) {
		item.querySelector(".link-event__title").classList.add('link-event__title--light');
		item.querySelector(".link-event__link").classList.add('link--light');
	}
	return item;
};

for (var i = 0; i < linkEventData.length; i++) {
	linkEventInsert.appendChild(createLinkEvent(linkEventData[i]));
}


// решил что лучше скопировать разметку в HTML
// var pageFooter = document.querySelector('.page-header').cloneNode(true);
// pageFooter.querySelector('section').remove();

// var copyright = document.createElement('b');
// copyright.textContent = '&copy; 2018 Новости культуры. Все права защищены.'

// pageFooter.append(copyright);
// console.log(pageFooter);

// var pageMain = document.querySelector('.page-main');
// pageMain.after(pageFooter);
