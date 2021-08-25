import React, {useState} from "react";
import "./index.css";

function CountButton(props) {

  console.log(props.incrementBy);

  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
      setCurrentCount(currentCount + props.incrementBy)
  };

  const buttonStyle = {
   background: props.buttonColor,

  }

  return (
    <div >
      <button style={buttonStyle} onClick={handleClick}>+ {props.incrementBy}</button>
      <div className="countDisplay"> {currentCount} </div>
    </div>
  );
}

export default CountButton;