import React from "react";



const Knappvalg = (props) => {

  return (
      
    <div id="knappvalg" >
        <button value={props.fag1Tekst}>{props.fag1}</button>
        <button value={props.fag2Tekst}>{props.fag2}</button>
    </div>

  )
  
}

export default Knappvalg