import React from "react";

function CountButton() {
  const currentCount = 0;

  const handleClick = () => {
    alert("you just click ME");
  };

  return (
    <div>
      <button onClick={handleClick}>+ 1</button>
      <div> {currentCount} </div>
    </div>
  );
}

export default CountButton;
