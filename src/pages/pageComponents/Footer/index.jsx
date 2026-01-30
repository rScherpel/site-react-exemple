import { Link } from "react-router-dom";
import { SITE } from "src/config";
import "./style.css";
import ContactActions from "src/components/ContactActions/index.jsx";

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="footer-list">
        <li className="foooter-logo-img">
          <img
            src=".\src\assets\images\logo azul redonda.jpg"
            alt=""
            className="foooter-logo-img"
          />
        </li>
        <li>
          <h1 className="list-tittles" id="link-tittle">
            Links
          </h1>
          <ul className="footer-sublist">
            <li className="quick-links">
              <Link to="/practice-areas">Áreas de Atuação</Link>
            </li>
            <li className="quick-links">
              <Link to="/contact">Contatos</Link>
            </li>
            <li className="quick-links">
              <Link to="/team">Nossa Equipe</Link>
            </li>
            <li className="quick-links">
              <Link to="/our-office">Nosso escritório</Link>
            </li>
          </ul>
        </li>

        <li>
          <h1 className="list-tittles" id="contact-li">
            Entre em Contato
          </h1>
          <ul>
            <ContactActions />
          </ul>
        </li>
      </ul>

      <div className="footer-bottom">
        <p>© 2025 {SITE.name}. Todos os direitos reservados.</p>
        <div className="footer-links">
          <Link to="/privacy-policy">Privacy Policy</Link>
        </div>
      </div>
    </footer>
  );
}
