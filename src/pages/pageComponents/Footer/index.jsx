import { SITE } from "src/config";
import "./style.css";
import ContactActions from "src/pages/pageComponents/ContactActions";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} {SITE.owner}. Todos os direitos
          reservados.
        </p>
        <ContactActions />
      </div>
    </footer>
  );
}
