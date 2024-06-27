import React, { useState } from "react";

function Timer() {
  let timerId = null; // Biến này sẽ bị khởi tạo lại mỗi lần render
  const [count, setCount] = useState(0);

  const startTimer = () => {
    timerId = setInterval(() => {
      setCount((prevCount) => prevCount + 1);
    }, 1000);
  };

  const stopTimer = () => {
    clearInterval(timerId); // timerId không đúng vì đã bị khởi tạo lại
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={startTimer}>Start Timer</button>
      <button onClick={stopTimer}>Stop Timer</button>
    </div>
  );
}

export default Timer;
