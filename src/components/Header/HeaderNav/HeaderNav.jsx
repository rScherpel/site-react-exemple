import { Link } from "react-router-dom";
import "./HeaderNav.css";

export default function Home() {
  return (
    <nav className="header-nav">
      <Link to="/">Home</Link>
      <Link to="/team">Nossa Equipe</Link>
      <Link to="/contact">Contatos</Link>
      <Link to="/media">Na Mídia</Link>
      <Link to="/about">Sobre Nós</Link>
    </nav>
  );
}
