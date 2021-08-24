import React, {useState} from "react";

function CountButton(props) {

  console.log(props.incrementBy);

  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
      setCurrentCount(currentCount + props.incrementBy)
  };

  const buttonStyle = {
   background: props.buttonColor,
    borderRadius: '10px',
  }

  return (
    <div >
      <button style={buttonStyle} onClick={handleClick}>+ {props.incrementBy}</button>
      <div> {currentCount} </div>
    </div>
  );
}

export default CountButton;
