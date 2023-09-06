import module from "./Project.module.scss";
import Link from "next/link";

export default function Project (props) {
  const link = props.href.startsWith("http");

  return (
    <div className={module.post}>
      <div className={module.post__filter}></div>
      <div className={module.post__img}>
        <img src={props.img} alt="" />
      </div>
      <div className="container">
        <div className={module.post__wrap}>
          {link ? (
            <a
              href={props.href}
              className={module.post__title}
              target="_blank"
              rel="noreferrer"
            >
              {props.title}
            </a>
          ) : (
            <Link href={props.href}>
              <div className={module.post__title}>{props.title}</div>
            </Link>
          )}

          <div className={module.post__text}>{props.text}</div>
        </div>
      </div>
    </div>
  );
};

