import React from 'react'
import "./overskrift.css"

const Overskrift = (props) => {
  return (
    <div id="hoved" >
        <h1 id="overskrift">{props.valgtFag}</h1>
    </div>
  )
}

export default Overskrift