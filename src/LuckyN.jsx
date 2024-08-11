import React, { useState } from "react";
import Dice from "./Dice";

const getRolls = (n) => {
  let arr = [];
  for (let i = 0; i < n; i++) {
    arr.push(Math.floor(Math.random() * 6) + 1);
  }
  return arr;
};

const sum = (arr) => {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
};

export default function LuckyN({ numDice = 2, winCheck }) {
  const [dice, setDice] = useState(() => getRolls(numDice));
  const isWinner = winCheck(dice);
  const rollAgain = () => {
    setDice(getRolls(numDice));
  };

  return (
    <div className="LuckyN">
      <h1>Lucky</h1>
      {isWinner && <h3>You win!</h3>}
      <Dice dice={dice} />
      <button onClick={rollAgain} style={{ margin: "4px" }}>
        Roll Again!
      </button>
    </div>
  );
}
