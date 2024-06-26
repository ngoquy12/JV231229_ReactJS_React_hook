import React, { useState } from "react";
import Form from "./Form";

export default function DemoMounted() {
  const [showForm, setShowForm] = useState(false);
  return (
    <div>
      {showForm && <Form />}

      {/* {showForm === true ? <Form /> : <></>} */}

      <button onClick={() => setShowForm(true)}>Mở form</button>
    </div>
  );
}
