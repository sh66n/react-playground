import React, { useState } from "react";
import "./Box.css";

export default function Box({ isActive, changeActivity }) {
  return (
    <div
      onClick={changeActivity}
      className="Box"
      style={{ backgroundColor: isActive ? "red" : "black" }}
    ></div>
  );
}
