import Link from "next/link";
import Image from "next/image";
import "./Logo.scss";
import logo from "./logo.svg";
export default function Logo () {
  return (
    <div className="logo">
      <Link href={"/"} className="logo__link">
        <Image src={logo} alt="" />
        <div className="logo__text">
          Евдокимова&nbsp;Ольга<span>Веб-разработчик</span>
        </div>
      </Link>
    </div>
  );
};
