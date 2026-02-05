import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const lightTheme = {
  "--color-primary": "#FFFFFF",
  "--color-accent": "#00c6a2",
  "--color-secondary": "#7B2CBF",
  "--color-white": "#000000",
  "--color-text-muted": "#555555",
  "--color-background-dark-alpha": "rgba(255,255,255,0.9)",
  "--color-border-accent": "rgba(0,255,209,0.2)",
  "--color-glow": "rgba(0,255,209,0.4)",
  "--basic-text-color": "#000000",
  "--component-background": "#f8fafc",
  "--contact-gradient-start": "#ffffff",
  "--contact-gradient-end": "#f1f5f9",
  "--contact-icon-hover-text": "#ffffff",
  "--contact-shadow-soft": "rgba(0,198,162,0.25)",
  "--contact-shadow-strong": "rgba(0,198,162,0.45)",
  "--send-bg-start": "#ffffff",
  "--send-bg-end": "#f1f5f9",
  "--send-border": "rgba(0,198,162,0.25)",
  "--send-input-bg": "#ffffff",
  "--send-button-text": "#ffffff",
  "--send-shadow-soft": "rgba(0,198,162,0.2)",
  "--send-shadow-strong": "rgba(0,198,162,0.45)",
  "--card-bg-start": "#ffffff",
  "--card-bg-end": "#f1f5f9",
  "--card-border": "rgba(0,198,162,0.25)",
  "--card-icon-bg": "rgba(0,198,162,0.2)",
  "--card-shadow-hover": "rgba(0,198,162,0.25)",
};

const darkTheme = {
  "--color-primary": "#0A192F",
  "--color-accent": "#00FFD1",
  "--color-secondary": "#7B2CBF",
  "--color-white": "#E6F1FF",
  "--color-text-muted": "#8892B0",
  "--color-background-dark-alpha": "rgba(10,25,47,0.9)",
  "--color-border-accent": "rgba(0,255,209,0.2)",
  "--color-glow": "rgba(0,255,209,0.4)",
  "--basic-text-color": "#E6F1FF",
  "--component-background": "#0a192f",
  "--contact-gradient-start": "#0A192F",
  "--contact-gradient-end": "#061826",
  "--contact-icon-hover-text": "#001b1f",
  "--contact-shadow-soft": "rgba(0,255,209,0.15)",
  "--contact-shadow-strong": "rgba(0,255,209,0.6)",
  "--send-bg-start": "#061826",
  "--send-bg-end": "#020c16",
  "--send-border": "rgba(0,255,209,0.15)",
  "--send-input-bg": "#0a192f",
  "--send-button-text": "#001b1f",
  "--send-shadow-soft": "rgba(0,255,209,0.12)",
  "--send-shadow-strong": "rgba(0,255,209,0.6)",
  "--card-bg-start": "#0A192F",
  "--card-bg-end": "rgba(10,25,47,0.9)",
  "--card-border": "rgba(0,255,209,0.25)",
  "--card-icon-bg": "rgba(0,255,209,0.15)",
  "--card-shadow-hover": "rgba(0,255,209,0.15)",
};

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  function toggleTheme() {
    setDark((prev) => !prev);
  }

  useEffect(() => {
    const theme = dark ? darkTheme : lightTheme;
    for (const key in theme) {
      document.documentElement.style.setProperty(key, theme[key]);
    }
  }, [dark]);

  return (
    <ThemeContext.Provider value={{ dark, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  return useContext(ThemeContext);
}
