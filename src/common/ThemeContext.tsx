import { createContext, useContext, useState } from "react";

export enum ThemeMode {
  LIGHT = "light",
  DARK = "dark",
  COLORED = "colored",
}

interface ThemeContextType {
  mode: ThemeMode;
  setMode: (newMode: ThemeMode) => void;
}

const defaultThemeContext = {
  mode: ThemeMode.LIGHT,
  setMode: () => {},
};

export const ThemeContext =
  createContext<ThemeContextType>(defaultThemeContext);

const ThemeProvider = ({ children }: { children: JSX.Element }) => {
  const [mode, setMode] = useState<ThemeMode>(ThemeMode.LIGHT);

  const theme = { mode, setMode };

  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};

export const useTheme = () => {
  return useContext(ThemeContext);
};

export default ThemeProvider;
