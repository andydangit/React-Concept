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
    console.log("Only Called when component mounts");
  }, [])

  // need an array 
  useEffect(() => {
    console.log("Called when component mounts or the currentCount is updated ");
  }, [currentCount])

  return (
    <div >
      <button onClick={handleClick}>+ {props.incrementBy}</button>
      <div className="countDisplay"> {currentCount} </div>
    </div>
  );
}

export default CountButton;
