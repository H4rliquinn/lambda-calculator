import React from "react";
import {specials} from "../../../data.js";
import SpecialButton from "./SpecialButton.js";
//import any components needed

//Import your array data to from the provided data file

const Specials = () => {
  // STEP 2 - add the imported data to state

  return (
    <div>
      {specials.map((item)=>{
       return <SpecialButton special={item} />
      })}
    </div>
  );
};

export default Specials;
