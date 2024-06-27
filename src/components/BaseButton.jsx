import React from "react";

const PRIMARY = "primary";
const DANGER = "danger";
const SUCCESS = "success";

export default function BaseButton({ title, onClick, type, children }) {
  return (
    <>
      <button
        className={`btn ${
          type === PRIMARY ? PRIMARY : type === DANGER ? DANGER : SUCCESS
        }`}
        onClick={onClick}
      >
        {children}
      </button>
    </>
  );
}
