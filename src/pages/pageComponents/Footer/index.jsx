import { Link } from "react-router-dom";
import { SITE } from "src/config/config.js";
import "./style.css";
import ContactActions from "src/components/ContactActions/ContactActions.jsx";

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
          <h1 className="list-tittles" id="link-tittle">Links</h1>
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
          <h1 className="list-tittles" id="contact-li">Entre em Contato</h1>
          <ul>
            <ContactActions/>
          </ul>
        </li>

        <li>
          {/* <h1 className="list-tittles">Localização</h1> */}
          <div className="footer-map">
            <iframe
              src="https://maps.google.com/maps?q=Tv.%20do%20Paço,%2023%20-%20Centro,%20Rio%20de%20Janeiro%20-%20RJ,%2020010-170&z=15&output=embed"
              width="100%"
              height="100%"
            ></iframe>
            <div className="map-overlay"></div>
          </div>
          <p className="map-caption">
            Tv. do Paço, 23 - Centro, Rio de Janeiro - RJ, 20010-170
          </p>
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
