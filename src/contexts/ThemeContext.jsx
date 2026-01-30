import { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

const lightTheme = {
  "--color-primary": "#FFFFFF",
  "--color-accent": "#00FFD1",
  "--color-secondary": "#7B2CBF",
  "--color-white": "#000000",
  "--color-text-muted": "#555555",
  "--color-background-dark-alpha": "rgba(255,255,255,0.9)",
  "--color-border-accent": "rgba(0,255,209,0.2)",
  "--color-glow": "rgba(0,255,209,0.4)",
  "--basic-text-color": "#000000",
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
};

export function ThemeProvider({ children }) {
  const [dark, setDark] = useState(true);

  function toggleTheme() {
    setDark(prev => !prev);
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
