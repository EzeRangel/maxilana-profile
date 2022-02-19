import { useState, createContext } from "react";

const ThemeContext = createContext();

const ThemeProvider = (props) => {
  const [mode, setMode] = useState("light");

  return (
    <ThemeContext.Provider
      value={{
        mode,
        setTheme: () => {
          const newMode = mode === "light" ? "dark" : "light";
          setMode(newMode);
        },
      }}
    >
      {props.children}
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeProvider };
