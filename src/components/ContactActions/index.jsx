import { SITE } from "../../config/index";
import "./style.css";
import { FaWhatsapp, FaInstagram, FaFacebook } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import { Link } from "react-router-dom";

export default function ContactActions() {
  return (
    <div className="contact-actions">
      <ul className="contact-list">
        <li>
          <a
            href={SITE.whatsapp_link}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
          >
            <FaWhatsapp size={26} />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
          >
            <FaInstagram size={26} />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook size={26} />
          </a>
        </li>
        <li>
          <a href={`mailto:${SITE.email}`} aria-label="Email">
            <IoMdMail size={26} />
          </a>
        </li>
      </ul>
      <p className="contact-helper">
        Não achou o que precisava? <Link to="/contact">clique aqui</Link>
      </p>
    </div>
  );
}
