import Link from "next/link";
import Image from "next/image";
import "./Logo.scss";
import logo from "./logo.png";

export default function Logo () {
  return (
    <div className="logo">
      <Link href={"/"} className="logo__link">
        <Image src={logo} alt="" />
        <div className="logo__text">
          Евдокимова&nbsp;Ольга
        </div>
      </Link>
    </div>
  );
};

