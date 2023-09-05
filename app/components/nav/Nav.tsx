"use client";
import Link from "next/link";
import m from "./Nav.module.scss";
// import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";

const Nav = () => {
  const [nav, setNav] = useState(false);
  const toggleActive = () => {
    setNav(!nav);
  };

  return (
    <nav className={m.nav}>
      <ul className={nav ? [m.nav_menu, m.active_menu].join(" ") : m.nav_menu}>
        <li onClick={toggleActive}>
          <Link href="/about">Обо мне</Link>
        </li>
        <li onClick={toggleActive}>
          <Link href="/blog">Блог</Link>
        </li>
        <li onClick={toggleActive}>
          <Link href="/contacts">Контакты</Link>
        </li>
      </ul>
      <div onClick={toggleActive} className={m.icon_menu}>
        {/* {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />} */}
      </div>
    </nav>
  );
};
export default Nav;
