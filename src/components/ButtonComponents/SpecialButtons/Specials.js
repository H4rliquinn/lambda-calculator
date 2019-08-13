import React from "react";
import {specials} from "../../../data.js";
import SpecialButton from "./SpecialButton.js";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state
  console.log(specials);
  return (
    <div>
      {specials.map((item,index)=>{
        console.log(item,index);
       return <SpecialButton special={item} key={String(index)} />
      })}
    </div>
  );
};

export default Specials;
