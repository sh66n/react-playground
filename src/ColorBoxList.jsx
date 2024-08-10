import React from "react";
import ColorBox from "./ColorBox";
import "./ColorBoxList.css";

export default function ColorBoxList({ colors }) {
  let boxes = [];
  for (let i = 0; i < 100; i++) {
    boxes.push(<ColorBox colors={colors} />);
  }
  return <div className="ColorBoxList">{boxes}</div>;
}
