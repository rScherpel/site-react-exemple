import { Link } from "react-router-dom";
import { useDeviceType } from "../../../hooks/useDeviceType";
import "./HeaderNav.css";

export default function HeaderNav() {
  const device = useDeviceType();

  const navClass =
    device === "celular" ? "header-nav-mobile" : "header-nav";

  return (
    <nav className={navClass}>
      <Link to="/">Home</Link>
      <Link to="/team">Nossa Equipe</Link>
      <Link to="/contact">Contatos</Link>
      <Link to="/media">Na Mídia</Link>
      <Link to="/about">Sobre Nós</Link>
    </nav>
  );
}
