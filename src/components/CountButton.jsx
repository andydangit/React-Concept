import React from "react";

function CountButton() {

    const currentCount = 0;

  return (
    <div>
      <button onClick={() => {
          alert("you just click")
      }}>+ 1 </button>
      <div> {currentCount} </div>
    </div>
  );
}

export default CountButton;
