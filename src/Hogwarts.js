import React from "react";
import Hufflepuff from "./houses/Hufflepuff";
import whoseHouse from "./houses/whoseHouse";
import { colors, gryffMascot } from "./houses/Gryffindor";

console.log(colors);
// => 'Scarlet and Gold'

gryffMascot();
// => 'The Lion'


function Hogwarts() {
 
  

  return (
    <>
      <h1>Welcome to Hogwarts!</h1>
      <div><Hufflepuff/></div>
      {whoseHouse()}
    </>
  )
}

export default Hogwarts;
