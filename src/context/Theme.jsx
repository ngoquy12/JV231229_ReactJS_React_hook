import React, { createContext, useState } from "react";
import Content from "../components/Content";

export const ThemeContext = createContext(); // Tạo ngữ cảnh

export default function Theme() {
  const [theme, setTheme] = useState("light");

  const handleChangeTheme = () => {
    if (theme === "light") {
      setTheme("dark");
    } else {
      setTheme("light");
    }
  };

  return (
    <ThemeContext.Provider value={{ theme, handleChangeTheme }}>
      {/* Danh sách những component cần cung cấp */}
      <h1>Theme context</h1>
      <Content />
      <footer>Footer</footer>
    </ThemeContext.Provider>
  );
}

// Tạo ra một context dùng để chuyển đổi tiếng việt sang tiếng anh
// Component Language chứa một context
// Component Post là con của Language
// COmponent POstDetail là con của Post
// Trong postDetail hãy gọi context và buttton để thay đôit chế độ ngôn ngữ
