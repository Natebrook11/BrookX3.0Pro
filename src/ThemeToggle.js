import React, { useState, useEffect } from 'react';
import "./theme.css"

function ThemeToggle() {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  useEffect(() => {
    if (isDarkTheme) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [isDarkTheme]);

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div>
      <input
        type="checkbox"
        id="theme-toggle"
        checked={isDarkTheme}
        onChange={toggleTheme}
      />
    </div>
  );
}

export default ThemeToggle;
