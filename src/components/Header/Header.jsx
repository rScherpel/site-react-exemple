import { Link } from "react-router-dom";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <span className="logo">R & I</span>

      <nav>
        <Link to="/">Home</Link>
        <Link to="/politica-de-privacidade">Política</Link>
      </nav>
    </header>
  );
}
