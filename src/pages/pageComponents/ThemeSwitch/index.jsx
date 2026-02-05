import toast from "react-hot-toast";
import { useTheme } from "../../../contexts/ThemeContext";
import { ThemeSwitchStyled } from "./style";
import FormControlLabel from "@mui/material/FormControlLabel";

export default function ThemeSwitch() {
  const { dark, toggleTheme } = useTheme();

  function handleToggle() {
    if (dark) {
      toast("☀️ Modo claro ativado. cuidado com os olhos!", {
        style: {
          background: "#0a192f",
          color: "#00ffd1",
        },
      });
    }
    toggleTheme();
  }

  return (
    <FormControlLabel
      control={
        <ThemeSwitchStyled
          checked={dark}
          onChange={handleToggle}
        />
      }
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
