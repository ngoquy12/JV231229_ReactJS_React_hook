import React, { useContext } from "react";
import { ThemeContext } from "../context/Theme";

export default function Info() {
  const { theme, handleChangeTheme } = useContext(ThemeContext);

  console.log("Theme", theme);
  return (
    <div className={theme === "light" ? "light" : "dark"}>
      <button onClick={handleChangeTheme}>Change theme</button>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium,
        hic facilis. Delectus maiores explicabo, fugiat voluptatem accusantium
        laboriosam laudantium modi nihil maxime! Cum minus ipsam placeat non
        molestiae suscipit a.
      </p>
    </div>
  );
}
