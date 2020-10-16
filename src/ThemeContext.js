import React, { createContext, useState } from "react";
import monacoThemes from "monaco-themes/themes/themelist";

const themes = Object.keys(monacoThemes);

export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [theme, setTheme] = useState("dark");
  const [downloadedThemes, setDownloadedThemes] = useState(["dark"]);

  const toggleDarkMode = () => {
    isDarkMode ? setIsDarkMode(false) : setIsDarkMode(true);
  };

  const addDownloadedTheme = (theme) => {
    if (downloadedThemes.includes(theme)) return;
    if (!themes.includes(theme) && !downloadedThemes.includes(theme)) {
      setDownloadedThemes([...downloadedThemes, theme]);
    } else {
      console.log("error: unkown theme: ", theme);
    }
  };

  const setEditorTheme = (theme) => {
    if (!themes.includes(theme) && !downloadedThemes.includes(theme)) return;
    setTheme(theme);
  };

  // const isDarkMode = true;
  return (
    <ThemeContext.Provider
      value={{
        isDarkMode,
        toggleDarkMode,
        addDownloadedTheme,
        setEditorTheme,
        theme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
