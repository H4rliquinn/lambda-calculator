import React from "react";

const NumberButton = (props) => {
  return (
    <button className={props.className}
    onClick={()=>props.update(String(props.number)) 
      }
    >{props.number}</button>
  );
};

export default NumberButton;
