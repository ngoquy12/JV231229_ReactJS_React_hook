import React, { useState } from "react";

const carts = [100, 200, 300, 400, 500];

export default function UseStateComponent() {
  const [count, setCount] = useState(() => {
    const total = carts.reduce((prev, curent) => prev + curent, 0);
    return total;
  });

  const [user, setUser] = useState({
    name: "Nguyễn Văn A",
    age: 12,
  });

  const handleCount = () => {
    setCount((prev) => prev + 1); // prev = 1 => count = 2
    // setCount((prev) => prev + 2); // prev = 2 => count = 4
    // setCount((prev) => prev + 3); // prev = 4 => count = 7
  };

  const handleChangeInfo = () => {
    setUser({
      ...user,
      address: "Hà Nội",
      id: Math.random() * 10000000,
    });
  };

  console.log("render");

  return (
    <div>
      <h2>Count: {count}</h2>
      <button onClick={handleCount}>Increase</button>
      <button onClick={handleChangeInfo}>Change info</button>
    </div>
  );
}
