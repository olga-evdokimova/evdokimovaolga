import "./Header.scss";
import Logo from "../Logo/Logo";
import Nav from "../Nav/Nav";

export default function Header() {
  return (
    <header className="header container">
      <Logo isWhite={false} />
      <Nav />
    </header>
  );
};

