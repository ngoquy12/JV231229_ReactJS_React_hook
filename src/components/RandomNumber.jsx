import React, { useReducer } from "react";

// Bước 1: Giá trị khởi tạo
const initialState = [];

const reducer = (state, action) => {
  switch (action) {
    case "Random":
      const newRandom = Math.ceil(Math.random() * 10);

      const newState = [...state, newRandom];

      console.log(newState);
      return newState;

    //   return state.push(newRandom);

    default:
      return state;
  }
};

export default function RandomNumber() {
  const [nums, dispatch] = useReducer(reducer, initialState);
  console.log(nums);

  return (
    <div>
      <div>Numbers: {JSON.stringify(nums)}</div>
      <button onClick={() => dispatch("Random")}>Random</button>
    </div>
  );
}
