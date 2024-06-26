import React, { useState } from "react";

export default function CounterText() {
  const [text, setText] = useState("");

  const handleChange = (event) => {
    // Lấy giá trị trong textera và cập nhật cho State
    setText(event.target.value);
  };

  const handleChangeState = () => {
    setText("Change text");
  };
  return (
    <div>
      <textarea value={text} onChange={handleChange} name="" id=""></textarea>
      <div>Length text: {text.length}</div>
      <button onClick={handleChangeState}>Change State</button>
    </div>
  );
}
