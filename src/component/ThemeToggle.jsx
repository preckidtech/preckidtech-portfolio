import React, { useState } from "react";
import { FaSun, FaMoon } from "react-icons/fa";

const ThemeToggle = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleIcon = () => {
    setIsDarkMode(!isDarkMode); // Toggle between light and dark mode
  };

  return (
    <button onClick={toggleIcon} className="p-2">
      {/* Conditionally render the icon based on the isDarkMode state */}
      {isDarkMode ? <FaMoon /> : <FaSun />}
    </button>
  );
};

export default ThemeToggle;
