import React from "react";
import "./Button.css";

const Button = (props) => {
  console.log(props);
  return(
  <div>{props.children}</div>
  )
};

export default Button;
