import { useState } from "react";

export default function Accordion({
  items,
  className = "",
  buttonClass = "",
  panelClass = ""
}) {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className={className}>
      {items.map((item, index) => (
        <div key={index}>
          <button
            className={`accordion ${buttonClass} ${
              openIndex === index ? "active" : ""
            }`}
            onClick={() => setOpenIndex(openIndex === index ? null : index)}
          >
            {item.title}
          </button>

          {openIndex === index && (
            <div className={`panel ${panelClass}`}>
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
