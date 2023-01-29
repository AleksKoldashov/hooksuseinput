import { useState, useEffect } from "react";

const useTheme = () => {
  const [theme, setTheme] = useState("ligth");

  const toggleTheme = () => {
    if (theme !== "dark") {
      localStorage.setItem("theme", "dark");
      setTheme("dark");
    } else {
      localStorage.setItem("theme", "ligth");
      setTheme("ligth");
    }
  };

  useEffect(() => {
    const localTheme = localStorage.getItem("theme");
    if (localTheme) {
      setTheme(localTheme);
    }
  }, []);

  return {
    theme,
    toggleTheme,
  };
};
export default useTheme;
