import "./Project.scss";
import Link from "next/link";
import Image, { StaticImageData } from "next/image";

type ProjectProps = {
  id: number;
  img: StaticImageData;
  title: string;
  text: string;
  href: string;
};
export default function Project(props: ProjectProps) {
  const link = props.href.startsWith("http");

  return (
    <div className="project">
      <div className="project__img">
        <Image src={props.img} alt="" />
      </div>
      <div className="project__content">
        {link ? (
          <a
            href={props.href}
            className="project__title"
            target="_blank"
            rel="noreferrer"
          >
            {props.title}
          </a>
        ) : (
          <Link href={props.href}>
            <div className="project__title">{props.title}</div>
          </Link>
        )}
        <div className="project__text">{props.text}</div>
      </div>
    </div>
  );
}
