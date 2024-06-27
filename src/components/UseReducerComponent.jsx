import React, { useReducer, useState } from "react";

// Bước 1: Tạo initialState
// Bước 2: Tạo reducer và cập nhật state
// Bước 3: Tạo các action
// Bước 4: dispatch các action

const initialState = 0;

const INCREASE = "increase";
const DECREASE = "decrease";

const reducer = (state, action) => {
  switch (action) {
    case INCREASE:
      return state + 1;
    case DECREASE:
      return state - 1;

    default:
      return state;
  }
};

export default function UseReducerComponent() {
  const [count, dispatch] = useReducer(reducer, initialState);
  //   const [count, setCount] = useState(0);

  //   const handleIncrease = () => {
  //     setCount(count + 1);
  //   };

  //   const handleDecrease = () => {
  //     setCount(count - 1);
  //   };
  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(INCREASE)}>Increase</button>
      <button onClick={() => dispatch(DECREASE)}>Decrease</button>
    </div>
  );
}

// Sử dụng useReducer để tạo ứng dụng random số. Khi random sẽ push vào trong
// mảng và render ra ngoài  giao diện
