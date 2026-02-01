import { Link } from "react-router-dom";
import useDeviceType from "../../../hooks/useDeviceType";
import "./style.css";

export default function HeaderNav() {
  const device = useDeviceType();
  console.log(device);

  const navClass = device === "celular" ? "header-nav-mobile" : "header-nav";

  return (
    <nav className={navClass}>
      <Link to="/">Home</Link>
      <a href="https://github.com/rScherpel/site-react-exemple" target="_blank" rel="noopener noreferrer">GitHub</a>
      <Link to="/techs">Tecnologias</Link>
      <Link to="/about">Sobre</Link>
      <Link to="/contact">Contatos</Link>
    </nav>
  );
}
