import React from "react";

function CountButton() {
  let currentCount = 0;

  const handleClick = () => {
    console.log(currentCount);
  };

  return (
    <div>
      <button onClick={handleClick}>+ 1</button>
      <div> {currentCount} </div>
    </div>
  );
}

export default CountButton;
