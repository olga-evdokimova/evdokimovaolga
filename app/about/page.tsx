
// import img from "../../img/about-02.jpg";

import "./style.scss";
export default function About() {
  return (
    <main>
      <div className="container">
        <section className="about">
          <div className="about__img">
            {/* <h1 className="title">Привет, друзья!</h1> */}
            {/* <img src={img} alt="" /> */}
          </div>

          <div className="wrap">
            <div className="wrap__content">
              <p className="sub-title">
                Я&nbsp;&mdash; фронтенд-разработчик, специализируюсь
                на&nbsp;создании сайтов. Разрабатываю различные типы сайтов,
                включая многостраничники, лендинги, визитки, портфолио
                и&nbsp;многое другое. Также имею опыт в&nbsp;доработке уже
                готовых сайтов и&nbsp;обеспечении их&nbsp;технической поддержки.
              </p>
              <p className="sub-title">
                Мои навыки и&nbsp;работа с&nbsp;командой позволяют создавать
                сайты &laquo;под ключ&raquo;, от&nbsp;идеи до&nbsp;запуска,
                а&nbsp;также обеспечивать их&nbsp;дальнейшее функционирование.
              </p>
              <ol>
                <li>
                  Верстка кодом дизайн-макета сайта в целом или отдельных
                  элементов для вашего сайта.
                </li>
                <li>
                  Подготовка и размещение материалов на сайте (текстовый либо
                  графический контент).
                </li>
                <li>
                  Создание нового функционала (например, дополнительная
                  фильтрация товаров, формы обратной связи т.п.).
                </li>
                <li>Внести правки на сайт.</li>
                <li>
                  Навести порядок на сайте под управлением WordPress. Убрать
                  лишние плагины, страницы и т.д.
                </li>
                <li>Применить анимацию.</li>
                <li>Сделать адаптив.</li>
                <li>
                  Посадить на cms wordpress (система управления содержимым
                  сайта).
                </li>
                <li>Подключить и настроить нужные плагины.</li>
                <li>Базовая SEO-настройка.</li>
                <li>Подключить яндекс метрику и гугл аналитику.</li>
                <li>Залить сайт на хостинг, выбрать домен.</li>
                <li>Тех поддержка сайта, резервное копирование.</li>
              </ol>
              <span>
                Помогу подобрать дизайнера для создания дизайн-макета.
              </span>
            </div>
          </div>
        </section>
      </div>
   
    </main>
  );
}
