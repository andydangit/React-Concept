import React, {useState} from "react";

function CountButton(props) {

  console.log(props.incrementBy);

  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
      setCurrentCount(currentCount + props.incrementBy)
  };

  const divStyle = {
    color: 'blue',
  }

  return (
    <div style={divStyle}>
      <button onClick={handleClick}>+ {props.incrementBy}</button>
      <div> {currentCount} </div>
    </div>
  );
}

export default CountButton;
