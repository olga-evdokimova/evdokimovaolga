import "./Project.scss";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type ProjectProps = {
  id: number;
  img: StaticImageData;
  title: string;
  text: string;
  href: string;
}
export default function Project(props:ProjectProps) {
  const link = props.href.startsWith("http");

  return (
   
      <div className="post">
        <div className="post__filter"></div>
        <div className="post__img">
          <Image src={props.img} alt="" />
        </div>
        <div className="container">
          <div className="post__wrap">
            {link ? (
              <a
                href={props.href}
                className="post__title"
                target="_blank"
                rel="noreferrer"
              >
                {props.title}
              </a>
            ) : (
              <Link href={props.href}>
                <div className="post__title">{props.title}</div>
              </Link>
            )}
            <div className="post__text">{props.text}</div>
          </div>
        </div>
      </div>
  
  );
}
