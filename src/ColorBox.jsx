import React from "react";
import "./ColorBox.css";
import { useState } from "react";

function getRandomColor(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export default function ColorBox({ colors }) {
  const [color, setColor] = useState(getRandomColor(colors));
  const modifyColor = () => {
    setColor(getRandomColor(colors));
  };
  return (
    <div
      className="ColorBox"
      style={{ backgroundColor: color }}
      onClick={modifyColor}
    ></div>
  );
}
