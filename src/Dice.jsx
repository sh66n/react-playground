import React from "react";
import Die from "./Die";
import "./Dice.css";

export default function Dice({ dice }) {
  return (
    <div className="Dice">
      {dice.map((roll, i) => {
        return <Die key={i} val={roll} />;
      })}
    </div>
  );
}
