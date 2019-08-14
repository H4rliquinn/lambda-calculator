import React from "react";
import {numbers} from "../../../data.js";
import NumberButton from "./NumberButton.js";
import {operators} from "../../../data.js";
//import any components needed
//Import your array data to from the provided data file

{/* STEP 3 - Use .map() to iterate over your array data and return a button
 component matching the name on the provided file. Pass
 it any props needed by the child component*/}


const Numbers = (props) => {
  return (
    <div>
      {numbers.map((item,index)=>{
       if (item==0){
        return <NumberButton key={String(item)+String(index)} number={item} className="button number0Button" update={props.update} cv={props.cv}/>
       } else {
        return <NumberButton key={String(item)+String(index)} number={item} className="button numberButton" update={props.update} cv={props.cv}/>
       }

      })}
    </div>
  );
};
export default Numbers;