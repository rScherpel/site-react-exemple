import { Link } from "react-router-dom";
import { SITE } from "../../config/config";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <ul className="footer-list">
          {/* 1. Brand */}
          <li>
            <h1>{SITE.name}</h1>
            <p>Escritório de Advocacia no Rio de Janeiro.</p>
            <div className="footer-social">
              <a href="#" className="social-icon">
                <span className="material-symbols-outlined">public</span>
              </a>
              <a href="#" className="social-icon">
                <span className="material-symbols-outlined">mail</span>
              </a>
            </div>
          </li>

          {/* 2. Quick Links */}
          <li>
            <h1>Links</h1>
            <ul className="footer-sublist">
              <li><Link to="/practice-areas">Our Practice Areas</Link></li>
              <li><Link to="/attorneys">Attorney Profiles</Link></li>
              <li><Link to="/case-studies">Case Studies</Link></li>
              <li><Link to="/blog">Legal Blog</Link></li>
            </ul>
          </li>

          {/* 3. Contato */}
          <li>
            <h1>Entre em Contato</h1>
            <p>
              <a href={SITE.whatsapp_link} target="_blank" rel="noopener noreferrer">
                Nosso número: (21) 98379-0705
              </a>
            </p>
          </li>

          {/* 4. Localização */}
          <li>
            <h1>Localização</h1>
            <div className="footer-map">
              <iframe
                src="https://maps.google.com/maps?q=Tv.%20do%20Paço,%2023%20-%20Centro,%20Rio%20de%20Janeiro%20-%20RJ,%2020010-170&z=15&output=embed"
                frameBorder="0"
                width="100%"
                height="100%"
                scrolling="no"
              ></iframe>
              <div className="map-overlay"></div>
            </div>
            <p className="map-caption">
              Tv. do Paço, 23 - Centro, Rio de Janeiro - RJ, 20010-170
            </p>
          </li>
        </ul>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p>© 2024 {SITE.name}. Todos os direitos reservados.</p>
          <div className="footer-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms">Terms of Service</Link>
            <Link to="/accessibility">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
