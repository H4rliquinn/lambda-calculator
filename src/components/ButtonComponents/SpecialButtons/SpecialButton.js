import React from "react";

const SpecialButton = (props) => {
  console.log(props);
  return (
    <button 
    className="button specialButton" 
    onClick={()=>props.update(props.special)}
      >{props.special}</button>
  );
};

export default SpecialButton;
