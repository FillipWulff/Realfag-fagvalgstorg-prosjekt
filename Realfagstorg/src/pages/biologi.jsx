import React from 'react'
import {useState} from "react";
import TilbakeKnapp from '../components/tilbakeKnapp'
import Overskrift from '../components/overskrift'
import yourImage from '../photos/biologiBg.png'
import DifficultySelector from '../components/DifficultySelector/difficultySelector'
import CourseContent from '../components/CourseContent/CourseContent'

const biologi = () => {

  const [difficulty, setDifficulty] = useState(1);


  return (
    <div>
      <TilbakeKnapp />
      <div style={{ backgroundImage: `url(${yourImage})`, backgroundSize:"1400px", width:"100vw", height:"100vh", marginTop:"0px",padding:"0px"}}>
          <Overskrift valgtFag="Biologi 1+2" image={yourImage}/>
      </div>
      <DifficultySelector valgtFag="Biologi"onSelect={setDifficulty}/>
      <CourseContent valgtFag="Biologi" difficulty={difficulty}/>
      <p>faef</p>
      <h1>Hei</h1>
      <h1>hei</h1>
      <h1>hei</h1>
      <h1>Hei</h1>
      <h1>hei</h1>
      <h1>hei</h1>
    </div>
  )
}

export default biologi