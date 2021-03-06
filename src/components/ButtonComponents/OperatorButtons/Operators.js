import React from "react";
import {operators} from "../../../data.js";
import OperatorButton from "./OperatorButton.js";
//import any components needed

//Import your array data to from the provided data file

const Operators = (props) => {
  // STEP 2 - add the imported data to state
  {/* STEP 3 - Use .map() to iterate over your array data and return a button
   component matching the name on the provided file. Pass
   it any props needed by the child component*/}
  return (
    <div className="rightButtons">
       {operators.map((item)=>{
       return <OperatorButton char={item.char} value={item.value} key={item.value} update={props.update} cv={props.cv}/>
      })}     
    </div>
  );
};

export default Operators;
