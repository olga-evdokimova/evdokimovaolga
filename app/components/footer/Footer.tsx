import "./Footer.scss";
// import Logo from "../logo/Logo";
import Social from "../social/Social";
import Nav from "../nav/Nav";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        {/* <Logo isWhite={true}/> */}
        <Social/>
        <Nav/>  
      </div>
      <div className="footer__copy">
        <span>© 2023</span>
        <span>Developer by Olga Evdokimova</span>
      </div>
    </footer>
  );
}
