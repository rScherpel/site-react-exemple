import ContactCards from "../pageComponents/ContactCards";
import "./style.css";

export default function Contacts() {
  return (
    <div className="contact-body">
      <div className="contact-title">
        <h1>Contatos</h1>
        <h2>Entre em contato comigo através das redes sociais abaixo:</h2>
      </div>

      <ContactCards />
    </div>
  );
}
