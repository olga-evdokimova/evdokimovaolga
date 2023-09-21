import "./style.scss";
import Title from "../components/Title/Title";
import Image from "next/image";
// import Test from "../components/Test/Test";
export default function About() {
  return (
    <div className="container2">
      <Title text="Обо мне" />
      <section className="about">
        <div className="about__content">
          <div className="about__img">
            <Image src="about.jpg" alt="Картинка" width={426} height={513} />
          </div>
          <p>
            Я&nbsp;&mdash; фронтенд-разработчик, специализируюсь
            на&nbsp;создании сайтов. Разрабатываю различные типы сайтов, включая
            многостраничники, лендинги, визитки, портфолио и&nbsp;многое другое.
            Также имею опыт в&nbsp;доработке уже готовых сайтов
            и&nbsp;обеспечении их&nbsp;технической поддержки.
          </p>
          <p>
            Мои навыки и&nbsp;работа с&nbsp;командой позволяют создавать сайты
            &laquo;под ключ&raquo;, от&nbsp;идеи до&nbsp;запуска, а&nbsp;также
            обеспечивать их&nbsp;дальнейшее функционирование.
          </p>
        </div>
        <div className="about__list">
          <h4 className="about__list-title">Мои услуги:</h4>
          <ul>
            <li>
              Верстка кодом дизайн-макета сайта целиком или отдельных элементов
              сайта.
            </li>
            <li>Адаптивная вёрстка.</li>
            <li>
              Подготовка и размещение материалов на сайте (текстовый,
              графический контент).
            </li>
            <li>
              Создание нового функционала (например: добавить анимацию,
              фильтрацию товаров, форму обратной связи т.п.).
            </li>
            <li>Внести правки на сайт.</li>
            <li>
              Посадка на cms wordpress (система управления содержимым сайта).
            </li>
            <li>Подключить и настроить нужные плагины.</li>
            <li>
              Навести порядок на сайте под управлением WordPress. (убрать лишние
              плагины, страницы, добавить функционал и т.д.)
            </li>
            <li>
              Базовая SEO-настройка. Подключить Яндекс Метрику или Google
              Аналитику.
            </li>
            <li>Залить сайт на хостинг, выбрать домен.</li>
            <li>Тех поддержка сайта, резервное копирование.</li>
          </ul>
          <span>Помогу подобрать дизайнера для создания дизайн-макета.</span>
        </div>
      </section>
    </div>
  );
}
