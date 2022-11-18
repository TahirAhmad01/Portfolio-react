import React, { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";
import { useWindowScrollPositions } from "../hook/useWindowScrollPositions";

export default function NavbarP() {
  const [isDarkMode, setDarkMode] = useState(false);
  const [theme, setTheme] = useState(localStorage.theme);

  const colorTheme = theme === "dark" ? "light" : "dark";
  // console.log(theme);
  const { scrollY } = useWindowScrollPositions();

  const toggleDarkMode = (checked) => {
    setTheme(colorTheme);
    setDarkMode(checked);
  };

  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colorTheme);
    root.classList.add(theme);

    if (theme === "dark") {
      setDarkMode(true);
    }

    localStorage.setItem("theme", theme);
  }, [colorTheme, isDarkMode, theme]);

  return (
    <div
      className={`backdrop-blur-xl bg-slate-100/40 dark:bg-[#0b1327]/70 w-full top-0 left-0 fixed z-50 h-20 transition-all duration-200 ${
        scrollY > 80 && "h-16"
      }`}
    >
      <div className="containerCustom flex items-center justify-between h-full">
        <div>logo</div>
        <div className="flex items-center">
          <div>menu</div>
          <div className="w-7 flex justify-end">
            <DarkModeSwitch
              checked={isDarkMode}
              onChange={toggleDarkMode}
              size={19}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
