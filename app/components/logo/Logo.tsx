import Link from "next/link";
import Image from "next/image";
import "./Logo.scss";
import logoBlack from "./logo.svg";
import logoWhite from "./logo-footer.svg"

type LogoProps = {
  isWhite: boolean;
};
export default function Logo (props:LogoProps) {
  return (
    <div className="logo">
      <Link href={"/"} className="logo__link">
        <Image src={props.isWhite ? logoWhite : logoBlack} alt="" />
        <div className="logo__text">
          Евдокимова&nbsp;Ольга<span>Веб-разработчик</span>
        </div>
      </Link>
    </div>
  );
};
