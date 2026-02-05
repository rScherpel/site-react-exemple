import { SITE } from "../../../config/index";
import { FaGithub, FaLinkedinIn, FaAt } from "react-icons/fa";
import "./style.css";

const contactItems = [
  {
    title: "GitHub",
    description: "View Source / Architecture",
    icon: <FaGithub size={22} />,
    link: SITE.github,
  },
  {
    title: "LinkedIn",
    description: "Professional Network",
    icon: <FaLinkedinIn size={22} />,
    link: SITE.linkedIn,
  },
  {
    title: "Email",
    description: "Direct Communication",
    icon: <FaAt size={22} />,
    link: "mailto:seuemail@email.com",
  },
]; 

export default function ContactCards() {
  return (
    <div className="contact-cards">
      {contactItems.map((item) => (
        <a
          key={item.title}
          href={item.link}
          target="_blank"
          rel="noopener noreferrer"
          className="contact-card"
        >
          <div className="contact-icon">{item.icon}</div>

          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </a>
      ))}
    </div>
  );
}