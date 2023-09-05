import Link from "next/link";
import "./Logo.scss";


const Logo = () => {
  return (
    <div className="logo">
      <Link href={"/"} className="logo__link">
        <img src="https://i.ibb.co/kQ4T5tX/logo.png" alt="" />
        <div className="logo__text">
          Евдокимова&nbsp;Ольга<span>Frontend-&nbsp;разработчик</span>
        </div>
      </Link>
    </div>
  );
};
export default Logo;
