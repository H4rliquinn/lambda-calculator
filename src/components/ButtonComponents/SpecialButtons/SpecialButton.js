import React from "react";

const SpecialButton = (props) => {
  return (
    <button className="button specialButton" key={props.key} >{props.special}</button>
  );
};

export default SpecialButton;
