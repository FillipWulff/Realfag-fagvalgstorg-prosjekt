import React from 'react'

const CourseContent = (props) => {
    var content = props.difficulty === 'Begynner' ?
    <p>Dette er innholdet for nybegynnere.</p> :
    <p>Dette er mer avansert innhold.</p>;

  return (
    <div>
      <h2>Valgt Fag: {props.valgtFag} {props.difficulty}</h2>
      {content}
    </div>
  )
}

export default CourseContent