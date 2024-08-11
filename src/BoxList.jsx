import React, { useState } from "react";
import Box from "./Box";
import "./BoxList.css";
import Button from "./Button";

export default function BoxList() {
  const [areActive, setAreActive] = useState(Array(6).fill(false));

  const changeActive = (idx) => {
    setAreActive((currActivity) => {
      return currActivity.map((a, i) => {
        if (i === idx) return !a;
        else return a;
      });
    });
  };

  const resetAll = () => {
    setAreActive(Array(6).fill(false));
  };

  return (
    <>
      <div className="BoxList">
        {areActive.map((isActive, i) => {
          return (
            <Box
              key={i}
              isActive={isActive}
              changeActivity={() => changeActive(i)}
            />
          );
        })}
      </div>
      <Button click={resetAll} text={"Reset"} />
    </>
  );
}
