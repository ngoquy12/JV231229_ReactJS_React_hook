import React, { useEffect, useRef, useState } from "react";

export default function UseRefComponent() {
  const inputRef = useRef(); // Tạo một tham chiếu
  const timerRef = useRef();
  const [time, setTime] = useState(0);
  let timerId;
  console.log(timerId);

  useEffect(() => {
    // Focus vào input
    inputRef.current.focus();
  }, []);

  //   setTimeout(() => {
  //     console.log("log");
  //   }, 3000);

  //   useEffect(() => {
  //     const timerId = setInterval(() => {
  //       setTime(time + 1);
  //     }, 1000);

  //     // cleanup function: Dùng để thực hiện một tác vụ vào đấy sau khi component bị un-mounted
  //     return () => {
  //       clearInterval(timerId);
  //     };
  //   }, [time]);

  const handleStart = () => {
    timerRef.current = setInterval(() => {
      setTime((prev) => prev + 1);
    }, 1000);
  };

  const handleStop = () => {
    // Lấy được id của sự kiện và hủy nó
    clearInterval(timerRef.current);
  };

  return (
    <div>
      <h2>Time: {time}</h2>
      <button onClick={handleStart}>Start</button>
      <button onClick={handleStop}>Stop</button>
      <input ref={inputRef} type="text" />
    </div>
  );
}
