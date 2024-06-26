import React, { useState } from "react";

export default function ConditionRendering() {
  const [show, setShow] = useState(false);
  const [color, setColor] = useState("red");

  const handleShow = () => {
    setShow(!show);
  };

  const handleChangeColor = () => {
    // setColor("black");
    if (color === "red") {
      setColor("black");
    } else {
      setColor("red");
    }
  };

  return (
    <div>
      {show ? (
        <>
          <h1>Show</h1>
        </>
      ) : (
        <>
          <h1>Hidden</h1>
        </>
      )}

      <div
        className={`font-weight ${color === "red" ? "text-red" : "text-black"}`}
      >
        Màu văn bản
      </div>

      {/* {show ? <h1>{show ? "Show" : "Hidden"}</h1> : <></>} */}
      <button onClick={handleShow}>{show === true ? "Hidden" : "Show"}</button>

      <button onClick={handleChangeColor}>Change color</button>
    </div>
  );
}
