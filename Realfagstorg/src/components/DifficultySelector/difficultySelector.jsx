import React from 'react'
import "./difficultySelector.css"

const DifficultySelector = (props) => {
  return (
    <div >
      <div className='Knapper'>
        <button className="button-28 "onClick={() => props.onSelect("1")}>{props.valgtFag} 1</button>
        <button className="button-28"onClick={() => props.onSelect("2")}>{props.valgtFag} 2</button>
      </div>
    </div>
  )
}

export default DifficultySelector