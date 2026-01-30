import { styled } from "@mui/material/styles";
import Switch from "@mui/material/Switch";

export const ThemeSwitchStyled = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  "& .MuiSwitch-switchBase": {
    margin: 1,
    padding: 0,
    transform: "translateX(6px)",
    "&.Mui-checked": {
      transform: "translateX(22px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "#8796A5",
        opacity: 1,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    width: 32,
    height: 32,
    backgroundColor: "#001e3c",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "16px",
    "&::before": {
      content: `"☀️"`,
    },
  },
  "& .Mui-checked .MuiSwitch-thumb::before": {
    content: `"🌙"`,
  },
  "& .MuiSwitch-track": {
    borderRadius: 17,
    backgroundColor: "#aab4be",
    opacity: 1,
  },
}));
  

