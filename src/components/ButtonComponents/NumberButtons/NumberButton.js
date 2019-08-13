import React from "react";

const NumberButton = (props) => {
  return (
    <button className={props.className}>{props.number}</button>
  );
};

export default NumberButton;
