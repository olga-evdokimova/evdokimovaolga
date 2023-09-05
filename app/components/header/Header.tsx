import "./Header.scss";
import Logo from "../logo/Logo";
import Nav from "../nav/Nav";

export default function Header () {
  return (
    <header className="header container">
      <Logo></Logo>
      <Nav></Nav>
    </header>
  );
};

