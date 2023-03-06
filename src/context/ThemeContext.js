import { createContext, useContext, useEffect, useState } from "react";
import { appTheme } from "../theme/theme";

export const ThemeContext = createContext({});

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(appTheme.dark);

  const handleSetTheme = (theme) => {
    setTheme(appTheme[theme]);
  };

  const values = {
    theme,
    handleSetTheme,
  };

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>;
};
