import "./Footer.scss";
import Logo from "../logo/Logo";
import Social from "../Social/Social";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <Logo></Logo>
        <Social></Social>
      </div>
      <div className="footer__copy">
        <span>© 2023</span>
        <a href="https://github.com/olga-evdokimova">
          Developer by Olga Evdokimova
        </a>
      </div>
    </footer>
  );
}
