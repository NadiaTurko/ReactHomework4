import React, { useState } from "react";

function ThemeMode() {
  const [themeMode, setThemeMode] = useState("light");
  const handleThemeChange = (event) => {
    const selectedTheme = event.target.value;
    setThemeMode(selectedTheme);
  };
  return (
    <div>
      <select value={themeMode} onChange={handleThemeChange}>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </div>
  );
}

export default ThemeMode;
