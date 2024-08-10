import React from "react";
import { useState } from "react";
export default function HappySad() {
  const [isHappy, setIsHappy] = useState(true);
  const updateMood = () => {
    setIsHappy(!isHappy);
  };

  return <h1 onClick={updateMood}>{isHappy ? ":)" : ":("}</h1>;
}
