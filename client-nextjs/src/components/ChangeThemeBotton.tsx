"use client";

import { useState, useEffect } from "react";

type Theme = "dark" | "light" | "system" | null;

export default function ButtonChangeTheme() {
  const [theme, setTheme] = useState<Theme>(null);

  useEffect(() => {

    if (localStorage.getItem("theme") === "dark") {
      setTheme("dark");
    } else if (localStorage.getItem("theme") === "light") {
      setTheme("light");
    } else {
      setTheme("system");
    }
  }, []);

  function toggleDark() {
    setTheme("dark");
    localStorage.setItem("theme", "dark");
    document.documentElement.classList.add("dark");
  }

  function toggleSystem() {
    setTheme("system");
    localStorage.removeItem("theme");
    applySystemTheme();
  }

  function toggleLight() {
    setTheme("light");
    localStorage.setItem("theme", "light");
    document.documentElement.classList.remove("dark");
  }

  function toggleDarkMode() {
    if (theme === "system") {
      setTheme("dark");
      localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark");
    } else if (theme === "dark") {
      setTheme("light");
      localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark");
    } else if (theme === "light") {
      setTheme("system");
      localStorage.removeItem("theme");
      applySystemTheme();
    }
  }

  function applySystemTheme() {
    if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }

  return (
    <div>
      <nav className="flex justify-between">
        <button
          className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
          onClick={toggleSystem}
        >
          System: 🖥️
        </button>

        <span className="mx-2 text-zinc-800 dark:text-gray-400">/</span>

        <button
          className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
          onClick={toggleDark}
        >
          Dark: 🌙
        </button>
        <span className="mx-2 text-zinc-800 dark:text-gray-400">/</span>

        <button
          className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-900 dark:hover:bg-gray-800 dark:text-white dark:focus:ring-gray-700"
          onClick={toggleLight}
        >
          Light: ☀️
        </button>
        <span className="mx-2 text-zinc-800 dark:text-gray-400">/</span>

        <button
          type="button"
          className="nline-flex items-center px-3 py-2 text-sm font-medium text-center text-black bg-zinc-600 rounded-lg hover:bg-zinc-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-zinc-300 dark:hover:bg-zinc-700   dark:hover:text-zinc-200  dark:focus:red-blue-800"
          onClick={toggleDarkMode}
        >
          {theme === "system" ? "🖥️" : null}
          {theme === "dark" ? "🌙" : null}
          {theme === "light" ? "☀️" : null}
        </button>
      </nav>
    </div>
  );
}
