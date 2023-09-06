
import image1 from "./img/1.jpg";
import image2 from "./img/4-4.jpg";
import image3 from "./img/2.jpg";
import image4 from "./img/1 (1).jpg";
import image5 from "./img/2-2.jpg";
import image6 from "./img/3-3.jpg";
import Project from "./components/project/Project";
import Title from "./components/Ttile";

let postData = [
  {
    id: 1,
    title: "Интернет-магазин",
    img: image1,
    text: "Итернет-магазин электронной техники написан кодом, работает на CMS WordPress. В данный момент заполняется самим заказчиком.",
    href: "http://electronicashop.ru/",
  },
  {
    id: 2,
    title: "pavel.evdokimov.xyz",
    img: image2,
    text: "Сайт написан для плиточника, здесь выставлены все его проекты с фото и видео. Сайт был создан именно для демонстрации проектов. Дополнительный функционал будет добавляться по мере необходимости.",
    href: "http://pavel.evdokimov.xyz/",
  },
  {
    id: 3,
    title: "khachkar.com",
    img: image3,
    text: "Доработка готового сайта на теме WordPress. Подключение платежной системы.",
    href: "https://khachkar.com/",
  },
  {
    id: 4,
    title: "Блог",
    img: image4,
    text: "Шаблон для персонального блога. Вести свой блог – это отличный способ поделиться своим опытом, знаниями, идеями и мыслями со всем миром.",
    href: "https://ci00274.tmweb.ru/",
  },
  {
    id: 5,
    title: "Пресс-центр",
    img: image5,
    text: "Шаблон пресс-центра для корпоративного блога.",
    href: "https://olga-evdokimova.github.io/blog-Press/",
  },
  {
    id: 6,
    title: "Корпоративный блог",
    img: image6,
    text: "Шаблон для корпоративного блога.",
    href: "https://olga-evdokimova.github.io/blog-Corporate/",
  },
];

let postElements = postData.map((element, key) => (
  <Project
    key={key}
    id={element.id}
    title={element.title}
    img={element.img}
    text={element.text}
    href={element.href}
  />
));

export default function Home() {
  return (
    <main>
      <Title tag="h1" text="мои проекты" />
      {postElements}
    </main>
  );
}
