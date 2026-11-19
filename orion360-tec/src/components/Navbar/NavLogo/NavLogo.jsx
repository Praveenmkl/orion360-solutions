import logo from "../../../assets/orion360_logo.png";
import "./NavLogo.css";

function NavLogo() {
  return (
    <a href="#home" className="nav-logo" aria-label="Orion360 home">
      <img src={logo} alt="Orion360" className="nav-logo__img" />
    </a>
  );
}

export default NavLogo;
