import { NavLink, Link } from "react-router-dom";
import KasaLogo from "../../assets/kasa-logo.png";
import './header.css';


function Header() {
  return (
    <header>
      <img src={KasaLogo} alt="Kasa Logo" />
      <nav>
        <NavLink to="/">Accueil</NavLink>
        <NavLink to="/about">À propos</NavLink>
      </nav>
    </header>
  );
}

export default Header;
