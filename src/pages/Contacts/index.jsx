import ContactCards from "../pageComponents/ContactCards";
import SendMessage from "../pageComponents/SendMessage";
import "./style.css";

export default function Contacts() {
  return (
    <div className="contact-body">
      <div className="contact-title">
        <h1>Bora construir algo?</h1>
        <h2>Ideas boas precisam de um bom programador!</h2>
      </div>
      <SendMessage />
      <ContactCards />
    </div>
  );
}
