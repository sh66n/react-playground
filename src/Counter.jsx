import React from "react";
import { useState } from "react";
export default function Counter() {
  const [num, setNum] = useState(0);
  console.log(num);
  console.log("Counter() executed with num " + num);
  const updateNum = () => {
    setNum((currNum) => currNum + 1);
    setNum((currNum) => currNum + 1);
    setNum((currNum) => currNum + 1);
    setNum((currNum) => currNum + 1);
  };
  return (
    <>
      <h1>Count is {num}</h1>
      <button onClick={updateNum}>Increment</button>
    </>
  );
}
