import { Link } from "react-router-dom";
import "./Header.css";
import { SITE } from "../../config/config";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <button className="header-logo-wrap">
          <img
            src=".\src\images\logo com texto branca.jpg"
            alt="imagem logo"
            className="header-logo"
          />
        </button>

        <nav className="header-nav">
          <Link to="/">Home</Link>
          <Link to="/team">Nossa Equipe</Link>
          <Link to="/contact">Contatos</Link>
          <Link to="/media">Na Mídia</Link>
          <Link to="/about">Sobre Nós</Link>
        </nav>

        <a
          href={SITE.whatsapp_link}
          className="header-button"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mande Mensagem!
        </a>
      </div>
    </header>
  );
}
