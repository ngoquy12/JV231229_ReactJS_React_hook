import React from "react";
import UseStateComponent from "./components/UseStateComponent";
import ConditionRendering from "./components/ConditionRendering";
import CounterText from "./components/CounterText";
import SelectComponent from "./components/SelectComponent";
import Form from "./components/Form";
import Timer from "./components/Timer";
import UseRefComponent from "./components/UseRefComponent";
import Theme from "./context/Theme";
import UseReducerComponent from "./components/UseReducerComponent";
import RandomNumber from "./components/RandomNumber";
import TodoList from "./components/TodoList";
import BaseButton from "./components/BaseButton";

export default function App() {
  const handleClick = () => {
    console.log("Clicked");
  };
  return (
    <div>
      {/* <UseStateComponent /> */}
      {/* <ConditionRendering /> */}
      {/* <CounterText /> */}
      {/* <SelectComponent /> */}
      {/* <UseEffectComponent /> */}
      {/* <DemoMounted /> */}
      {/* <Theme /> */}
      {/* <UseRefComponent /> */}
      {/* <Theme /> */}
      {/* <UseReducerComponent /> */}
      {/* <RandomNumber /> */}
      {/* <TodoList /> */}

      <BaseButton type="success" onClick={handleClick}>
        <p>Hello</p>
      </BaseButton>
    </div>
  );
}
