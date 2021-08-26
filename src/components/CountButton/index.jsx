import React, {useState, useEffect} from "react";
import "./index.css";

function CountButton(props) {

  // console.log(props.incrementBy);

  const [currentCount, setCurrentCount] = useState(0)

  const handleClick = () => {
      setCurrentCount(currentCount + props.incrementBy)
  };

  // useEffect will need a 2nd argument
  useEffect(() => {
    if(currentCount === 5){
      alert("the count max is 5")
      setCurrentCount(0)
    }
  }, [currentCount])

  return (
    <div >
      <button onClick={handleClick}>+ {props.incrementBy}</button>
      <div className="countDisplay"> {currentCount} </div>
    </div>
  );
}

export default CountButton;
