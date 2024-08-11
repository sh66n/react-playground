import React from "react";
import Player from "./Player";
import { useState } from "react";

export default function ScoreKeeper({ numPlayers = 2, target = 10 }) {
  const [scores, setScores] = useState(Array(numPlayers).fill(0));

  const resetAll = () => {
    setScores(Array(numPlayers).fill(0));
  };

  const incrementScore = (idx) => {
    setScores((oldScores) => {
      return oldScores.map((s, i) => {
        if (i === idx) {
          return s + 1;
        } else {
          return s;
        }
      });
    });
  };

  return (
    <div>
      <ul>
        {scores.map((s, i) => {
          return (
            <li key={i}>
              Player{i + 1}: {s}{" "}
              <button
                onClick={() => {
                  incrementScore(i);
                }}
              >
                +1
              </button>
              {s === target && <p>You win!</p>}
            </li>
          );
        })}
      </ul>
      <button onClick={resetAll}>Reset</button>
    </div>
  );
}
