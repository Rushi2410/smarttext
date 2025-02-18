import React from "react";

export default function DarkModeToggle({ darkMode, toggleDarkMode }) {
  return (
    <button className="btn btn-dark mb-3" onClick={toggleDarkMode}>
      {darkMode ? "Light Mode ☀️" : "Dark Mode 🌙"}
    </button>
  );
}
