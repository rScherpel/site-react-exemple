import "./style.css";
import HeaderNav from "@/pages/pageComponents/HeaderNav";
import ThemeSwitch from "@/pages/pageComponents/ThemeSwitch";
import useDeviceType from "../../../hooks/useDeviceType";
import Accordion from "@/components/Accordion";
import { IoIosMenu } from "react-icons/io";

export default function Header() {
  const device = useDeviceType();

  if (device !== "notebook") {
    return (
      <header className="header">
        <div className="header-first-part">
          <div className="header-logo-wrap">
            <img src="/favicon.svg" alt="logo" className="header-logo" />
            <h1>UAPEL</h1>
          </div>
          <ThemeSwitch />
        </div>
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
      </header>
    );
  }
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-logo-wrap">
          <img src="/favicon.svg" alt="logo" className="header-logo" />
          <h1>UAPEL</h1>
        </div>
        <HeaderNav />
        <ThemeSwitch />
      </div>
    </header>
  );
}
