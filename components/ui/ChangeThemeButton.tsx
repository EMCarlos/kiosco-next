"use client";
import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SwitchThemeButton = () => {
  const [theme, setTheme] = useState("light");

  const switchThemeMode = () => {
    const root = document.documentElement;
    const currentTheme = root.getAttribute("data-theme");

    if (currentTheme === "light") {
      root.setAttribute("data-theme", "dark");
      setTheme("dark");
    } else {
      root.setAttribute("data-theme", "light");
      setTheme("light");
    }
  };

  return (
    <button
      onClick={switchThemeMode}
      className="ml-3 p-2 rounded-full"
      style={{
        backgroundColor: "var(--card-background)",
        color: "var(--foreground)",
      }}
    >
      {theme === "dark" ? (
        <SunIcon className="h-6 w-6" />
      ) : (
        <MoonIcon className="h-6 w-6" />
      )}
    </button>
  );
};

export default SwitchThemeButton;
