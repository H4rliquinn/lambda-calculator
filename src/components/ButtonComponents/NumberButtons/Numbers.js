import React from "react";
import {numbers} from "../../../data.js";
import NumberButton from "./NumberButton.js";

//import any components needed
//Import your array data to from the provided data file

{/* STEP 3 - Use .map() to iterate over your array data and return a button
 component matching the name on the provided file. Pass
 it any props needed by the child component*/}


const Numbers = () => {
  return (
    <div>
      {numbers.map((item)=>{
       if (item==0){
        return <NumberButton number={item} className="button number0Button"/>
       } else {
        return <NumberButton number={item} className="button numberButton"/>
       }

      })}
    </div>
  );
};
export default Numbers;