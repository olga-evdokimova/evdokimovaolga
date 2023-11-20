"use client";
import Title from "./components/Title/Title";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  const postData = [
    {
      id: 1,
      title: "sifoxtech.com",
      img: "project-06.jpg",
      text: "Сайт компании SiFox Technologies. ",
      href: "https://www.sifoxtech.com/",
    },
    {
      id: 2,
      title: "electronicashop.ru",
      img: "project-01.jpg",
      text: "Итернет-магазин электронной техники. Управление контентом CMS WordPress.",
      href: "http://electronicashop.ru/",
    },
    {
      id: 3,
      title: "pavel.evdokimov.xyz",
      img: "project-02.jpg",
      text: "Сайт портфолио для плиточника. Управление контентом CMS WordPress.",
      href: "http://pavel.evdokimov.xyz/",
    },
    {
      id: 4,
      title: "khachkar.com",
      img: "project-03.jpg",
      text: "Доработка готового сайта на теме WordPress. Подключение платежной системы.",
      href: "https://khachkar.com/",
    },
    {
      id: 5,
      title: "Блог",
      img: "project-04.jpg",
      text: "Шаблон для персонального блога. Управление контентом CMS WordPress.",
      href: "https://ci00274.tmweb.ru/",
    },
    {
      id: 6,
      title: "Пресс-центр",
      img: "project-05.jpg",
      text: "Шаблон главной страницы пресс-центра.",
      href: "https://olga-evdokimova.github.io/blog-Press/",
    },
    {
      id: 7,
      title: "Корпоративный блог",
      img: "project-06.jpg",
      text: "Шаблон главной страницы корпоративного блога.",
      href: "https://olga-evdokimova.github.io/blog-Corporate/",
    },
  ];
  return (
    <div className="container">
      <Title>мои проекты</Title>
      <div className="project">
        {postData.map((item, index) => (
          <div className="project__wrapper" key={index}>
            <div className="project__img">
              <Image src={item.img} alt="" fill sizes="200px" />
              <div className="project__content">
                <Link href={item.href}>
                  {item.title}
                  <svg
                    width="30"
                    height="22"
                    viewBox="0 0 32 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M31.0607 13.0607C31.6464 12.4749 31.6464 11.5251 31.0607 10.9393L21.5147 1.3934C20.9289 0.807612 19.9792 0.807612 19.3934 1.3934C18.8076 1.97918 18.8076 2.92893 19.3934 3.51472L27.8787 12L19.3934 20.4853C18.8076 21.0711 18.8076 22.0208 19.3934 22.6066C19.9792 23.1924 20.9289 23.1924 21.5147 22.6066L31.0607 13.0607ZM0 13.5H30V10.5H0V13.5Z"
                      fill="white"
                    />
                  </svg>
                </Link>
                <p>{item.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
