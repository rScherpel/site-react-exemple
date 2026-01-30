import FormControlLabel from "@mui/material/FormControlLabel";
import { ThemeSwitchStyled } from "./style";
import { useTheme } from "src/contexts/ThemeContext.jsx";

export default function ThemeSwitch() {
  const { dark, toggleTheme } = useTheme();

  return (
    <FormControlLabel
      control={<ThemeSwitchStyled checked={dark} onChange={toggleTheme} />}
      label={dark ? "Dark" : "Light"}
      sx={{
        "& .MuiFormControlLabel-label": {
          color: dark ? "#fff" : "#000",
          fontWeight: "bold",
          fontSize: "1rem",
        },
      }}
    />
  );
}
