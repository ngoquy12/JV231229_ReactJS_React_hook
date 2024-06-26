import React, { useEffect, useState } from "react";

export default function UseEffectComponent() {
  const [count, setCount] = useState(0);
  const [title, setTitle] = useState("");
  // Trường hợp 1: Không có cleanup
  // + Callback được gọi khi component được mounted
  // + Callback được gọi State thay đổi
  // => Ít dùng
  useEffect(() => {
    document.title = title;
  });

  // Trường hợp 2: Có cleanup là một một mảng rỗng
  // Callback được gọi khi compoent được mounted
  // Callbakck được gọi 1 lần khi component được mounted
  // Hay được sử dụng để gọi API render dữ liệu lần đầu
  useEffect(() => {
    console.log("Gọi API");
  }, []);

  // Trường hợp 3: Có cleanup là một dependency
  useEffect(() => {
    console.log("Callback được gọi");
  }, [count, title]);

  return (
    <div>
      <button onClick={() => setCount(count + 1)}>Count</button>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />
    </div>
  );
}
