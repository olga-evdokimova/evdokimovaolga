import "./Footer.scss";
import Social from "../Social/Social";
import Nav from "../Nav/Nav";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Social />
        <Nav />
      </div>
      <div className="footer__copy">
        <span>© 2023</span>
        <span>Developer by Olga Evdokimova</span>
      </div>
    </footer>
  );
}
