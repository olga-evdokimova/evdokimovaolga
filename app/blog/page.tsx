import "./style.scss";
import Title from "../components/Title/Title";

import Image from "next/image";
import Link from "next/link";
import { log } from "console";

export default function Blog() {
  const blogCard = [
    {
      id: 1,
      title:
        "Эффект глитча на странице 404: привлечение внимания пользователей",
      img: "post-01.jpg",
      excerpt:
        "Страница 404 (страница не найдена) - это страница, которая отображается, когда пользователь пытается получить доступ к странице...",
      date: "12.09.2023",
      comments: "1",
    },
    {
      id: 2,
      title: "lfjgljg",
      img: "post-01.jpg",
      excerpt: "Страница 404 (страница не найдена)",
      date: "15.09.2023",
      comments: "2",
    },
  ];
  const titles = blogCard.map((card) => card.title);
  
  return (
    <div className="blog container2">
      <Title>Блог</Title>
      {/* <h3 className="blog__subtitle">
        Добро пожаловать в мой блог! Здесь вы найдете информацию о моей работе в
        области фронтенд-разработки. Буду рада поделиться с вами своим опытом и
        интересными проектами.
      </h3> */}

      {blogCard.map((item, index) => (
        <Link href={`/blog/${item.title}`} className="post" key={index}>
          <Image src={item.img} alt="Картинка" width={314} height={289} />
          <div className="post__content">
            <h3 className="post__title">{item.title}</h3>
            <p className="post__excerpt">{item.excerpt}</p>
            <div className="post__info">
              <span className="post__info-date">{item.date}</span>
              <span className="post__info-comments">
                {item.comments}
                <svg
                  width="24"
                  height="22"
                  viewBox="0 0 24 22"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.0016 0.501373C5.37429 0.501373 0.00311061 4.86487 0.00311061 10.2501C0.00311061 12.4811 0.935802 14.5246 2.48248 16.1697C1.78413 18.0163 0.331193 19.5817 0.307759 19.6005C-0.00157629 19.9285 -0.0859404 20.4066 0.0921616 20.8191C0.270263 21.2315 0.678023 21.4987 1.12796 21.4987C4.0104 21.4987 6.28355 20.2941 7.64743 19.3286C9.00195 19.7551 10.4643 19.9988 12.0016 19.9988C18.6288 19.9988 24 15.6353 24 10.2501C24 4.86487 18.6288 0.501373 12.0016 0.501373ZM12.0016 17.7491C10.7502 17.7491 9.51282 17.557 8.32703 17.182L7.26311 16.8446L6.34916 17.4914C5.67894 17.9647 4.76031 18.4944 3.6542 18.8506C3.99634 18.2834 4.32911 17.646 4.58689 16.9664L5.0837 15.6494L4.1182 14.6277C3.26988 13.7231 2.25282 12.228 2.25282 10.2501C2.25282 6.11627 6.62569 2.75108 12.0016 2.75108C17.3774 2.75108 21.7503 6.11627 21.7503 10.2501C21.7503 14.3839 17.3774 17.7491 12.0016 17.7491Z"
                    fill="black"
                    fill-opacity="0.5"
                  />
                </svg>
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}