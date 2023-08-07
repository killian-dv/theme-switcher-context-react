import { createContext } from "react";

export const ThemeModeContext = createContext("light");

export const THEME = {
  light: {
    textColor: "#1e1f2c",
    backgroundColor: "#fff",
  },
  dark: {
    textColor: "#fff",
    backgroundColor: "#1e1f2c",
  },
};
