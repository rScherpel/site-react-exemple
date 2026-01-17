import "./Header.css";
import HeaderNav from "./HeaderNav/HeaderNav.jsx";
import { SITE } from "../../config/config";

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <button className="header-logo-wrap">
          <img
            src=".\src\assets\images\logo com texto branca.jpg"
            alt="imagem logo"
            className="header-logo"
          />
        </button>

        <HeaderNav/>

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
