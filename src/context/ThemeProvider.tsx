"use client";

import {
  type ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

type ThemeContextType = {
  mode: "dark" | "light";
  setMode: (mode: "dark" | "light") => void;
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [mode, setMode] = useState<"dark" | "light">("light");

  useEffect(() => {
    // handleThemeChange
    if (mode === "dark") {
      // setMode("light");
      document.documentElement.classList.add("light");
    } else {
      // setMode("dark");
      document.documentElement.classList.remove("dark");
    }
  }, [mode]);

  return (
    <ThemeContext.Provider value={{ mode, setMode }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
