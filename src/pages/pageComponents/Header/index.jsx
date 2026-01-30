import "./style.css";
import HeaderNav from "@/pages/pageComponents/HeaderNav";
import { SITE } from "src/config/index.js";
import useDeviceType from "../../../hooks/useDeviceType";
import Accordion from "@/components/Accordion";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const device = useDeviceType();

  if (device !== "notebook") {
    return (
      <header className="header">
        <a className="header-logo-wrap">
          <img
            src="/src/assets/images/logo com texto branca.jpg"
            alt="imagem logo"
            className="header-logo"
          />
        </a>
        <div>
          <Accordion
            className="accordion"
            wrapperClass="accordion-container"
            buttonClass="accordion-button"
            panelClass="accordion-panel"
            items={[
              {
                title: <IoIosMenu size={27}/>,
                content: <HeaderNav />
              },
            ]}
          />
        </div>
      </header>
    );
  }
  return (
    <header className="header">
      <div className="header-container">
        <a className="header-logo-wrap" href="/home">
          <img
            src="/src/assets/images/logo com texto branca.jpg"
            alt="imagem logo"
            className="header-logo"
          />
        </a>
        <HeaderNav />
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
