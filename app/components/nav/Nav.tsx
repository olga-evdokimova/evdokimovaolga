"use client";
import Link from "next/link";
import "./Nav.scss";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Nav() {
  const [nav, setNav] = useState(false);
  const toggleActive = () => {
    setNav(!nav);
  };
  return (
    <nav className="nav">
      <ul className={nav ? ["nav__menu", "active_menu"].join(" ") : "nav__menu"}>
        <li onClick={toggleActive}>
          <Link href="/">Главная</Link>
        </li>
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
      <div onClick={toggleActive} className="icon_menu">
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>
    </nav>
  );
}

