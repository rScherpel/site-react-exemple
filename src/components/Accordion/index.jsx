import { useState } from "react";

export default function Accordion({
  items = [],
  className = "",
  wrapperClass = "",
  buttonClass = "",
  panelClass = ""
}) {
  const [openIndex, setOpenIndex] = useState(null);

  if (!items.length) return null;

  return (
    <div className={className}>
      {items.map((item, index) => {
        const isOpen = openIndex === index;

        return (
          <div key={index} className={wrapperClass}>
            <button
              className={`accordion ${buttonClass} ${isOpen ? "active" : ""}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
            >
              {item.title}
            </button>

            {isOpen && (
              <div className={`panel ${panelClass}`}>
                {item.content}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
