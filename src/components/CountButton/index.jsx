import React, {useState, useEffect} from "react";
import "./index.css";

function CountButton(props) {

  // console.log(props.incrementBy);

  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
      setCurrentCount(currentCount + props.incrementBy)
  };

  // need an array 
  useEffect(() => {
    console.log("use Effect func called");
  }, [currentCount])
  
  // need an array 
  useEffect(() => {
    console.log("use Effect func called");
  }, [currentCount])

  return (
    <div >
      <button onClick={handleClick}>+ {props.incrementBy}</button>
      <div className="countDisplay"> {currentCount} </div>
    </div>
  );
}

export default CountButton;
