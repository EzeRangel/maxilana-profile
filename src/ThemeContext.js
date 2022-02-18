import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  useEffect(() => {
    if (theme === "light") {
      document.body.classList.remove("theme-dark");
    } else {
      document.body.classList.add("theme-dark");
    }
  }, [theme]);

  return (
    <ThemeContext.Provider
      value={{
        mode: theme,
        setMode: () => {
          const updatedTheme = theme === "light" ? "dark" : "light";

          setTheme(updatedTheme);
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
