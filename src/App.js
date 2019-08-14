import React, {useState} from "react";
import "./App.css";
import Numbers from "./components/ButtonComponents/NumberButtons/Numbers.js";
import Operators from "./components/ButtonComponents/OperatorButtons/Operators.js";
import Specials from "./components/ButtonComponents/SpecialButtons/Specials.js";
import Display from "./components/DisplayComponents/Display.js";
import {operators} from "./data.js";

// STEP 4 - import the button and display components
// Don't forget to import any extra css/scss files you build into the correct component

// Logo has already been provided for you. Do the same for the remaining components
import Logo from "./components/DisplayComponents/Logo";
  // STEP 2 - add the imported data to state

function App() {
  const [displayState, setdisplayState] = useState(0);

  function numberPress(currButton){
    if(currButton==0 && displayState===0){
      
    } else if (displayState===0 && currButton!="."){
      setdisplayState(String(currButton));
    } else{
      setdisplayState(String(displayState)+String(currButton));
    }
  }

  const ops=operators.map((item)=>
    {return item.value;}
  );
  // console.log(ops);
  function opPress(currButton){
    if (currButton==="="){
      setdisplayState(eval(displayState));
    } else{
      setdisplayState(displayState+String(currButton));
    }
  }
  function specPress(currButton){
    // console.log(currButton);
    if (currButton==="C"){
      setdisplayState(0);
    } else if (currButton==="+/-"){
        let val=eval(displayState)
        if (val>0){
          setdisplayState(val*-1);
        } else {
          setdisplayState(Math.abs(val));
        }

    } else if (currButton==="%"){
      setdisplayState(eval(displayState)/100);
    }
  }

  // STEP 5 - After you get the components displaying using the provided data file, write your state hooks here.
  // Once the state hooks are in place write some functions to hold data in state and update that data depending on what it needs to be doing
  // Your functions should accept a parameter of the the item data being displayed to the DOM (ie - should recieve 5 if the user clicks on
  // the "5" button, or the operator if they click one of those buttons) and then call your setter function to update state.
  // Don't forget to pass the functions (and any additional data needed) to the components as props
  {/* STEP 4 - Render your components here and be sure to properly import/export all files */}

  return (
    <div className="container">

      <Logo src/>
      <Display currVal={displayState}/>


      <div className="App">
        <div className="leftButtons">
          <Specials cv={displayState} update={specPress}/>
          <Numbers cv={displayState} update={numberPress}/>
        </div>
        <Operators cv={displayState} update={opPress}/>   
      </div>
    </div>
  );
}

export default App;
