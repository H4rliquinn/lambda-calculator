import React from "react";

const OperatorButton = (props) => {
  {/* Display a button element rendering the data being passed down from the parent container on props */}
  return (
    <button 
    value="{props.value}" 
    className="button operatorButton" 
    onClick={()=>props.update(props.value) 
    }
    >{props.char}</button>
  );
};
export default OperatorButton;
