import React, { useEffect, useState } from "react";
import DarckModeButton from "../../assets copy/website/dark-mode-button.png";
import LightModeButton from "../../assets copy/website/light-mode-button.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(localStorage.getItem("theme")?localStorage.getItem("theme"):"light");
  const element = document.documentElement;
  
  useEffect(() => {
      localStorage.setItem("theme",theme);
      (theme==="dark")?element.classList.add("dark"):element.classList.remove("dark")
  })
  return (
    <div className="relative">
      <img
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        src={LightModeButton}
        alt=""
        className={`w-12 cursor-pointer absolute right-0 z-10 ${
          theme === "dark" ? "opacity-0" : "opacity-100"
        } transition-all duration-300`}
      />
      <img
        onClick={() => setTheme(theme ==="dark" ? "light" : "dark")}
        src={DarckModeButton}
        alt=""
        className={`w-12 cursor-pointer`}
      />
    </div>
  );
};

export default DarkMode;
