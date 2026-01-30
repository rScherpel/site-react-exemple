import "./style.css";
import HeaderNav from "@/pages/pageComponents/HeaderNav";
import { SITE } from "src/config/index.js";
import ThemeSwitch from "@/pages/pageComponents/ThemeSwitch";
import useDeviceType from "../../../hooks/useDeviceType";
import Accordion from "@/components/Accordion";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const device = useDeviceType();

  if (device !== "notebook") {
    return (
      <header className="header">
      <h1>GUAPEL</h1>
        <div>
          <Accordion
            className="accordion"
            wrapperClass="accordion-container"
            buttonClass="accordion-button"
            panelClass="accordion-panel"
            items={[
              {
                title: <IoIosMenu size={27} />,
                content: <HeaderNav />,
              },
            ]}
          />
        </div>
        <ThemeSwitch />
      </header>
    );
  }
  return (
    <header className="header">
      <div className="header-container">
      <h1>GUAPEL</h1>
        <HeaderNav />
        <ThemeSwitch />
      </div>
    </header>
  );
}
