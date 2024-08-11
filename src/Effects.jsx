import React, { useEffect, useState } from "react";

export default function Effects() {
  const [count, setCount] = useState(0);
  const [dabloo, setDabloo] = useState("W");
  useEffect(() => {
    console.log("setup function");
    return () => {
      console.log("cleanup function");
    };
  }, [count]);

  const incrementCount = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <h1>{count} </h1>
      <button onClick={incrementCount}>+1</button>
    </div>
  );
}
