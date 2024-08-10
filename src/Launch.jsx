import React from "react";

export default function Launch() {
  return (
    <>
      <p
        onMouseOver={() => {
          console.log("youve got to be kidding me");
        }}
      >
        Click the button for boom
      </p>
      <button
        onClick={() => {
          alert("what have you done");
        }}
      >
        Launch nuclear missle!
      </button>
    </>
  );
}
