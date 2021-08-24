import React, {useState} from "react";

function CountButton(props) {

  console.log(props);

  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
      setCurrentCount(currentCount + 1)
  };

  console.log("component re-rendered");

  return (
    <div>
      <button onClick={handleClick}>+ 1</button>
      <div> {currentCount} </div>
    </div>
  );
}

export default CountButton;
