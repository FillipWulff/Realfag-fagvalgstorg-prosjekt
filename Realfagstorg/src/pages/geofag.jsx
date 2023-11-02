import React from 'react'
import TilbakeKnapp from '../components/tilbakeKnapp'
import Overskrift from '../components/overskrift'
import yourImage from '../../public/photos/IT.jpeg'

const geofag = () => {
  return (
    <div>
        <TilbakeKnapp />
        <div style={{ backgroundImage: `url(${yourImage})`, backgroundSize:"1500px", width:"100vw", height:"100vh", marginTop:"0px",padding:"0px"}}>
          <Overskrift valgtFag="Geofag" image={yourImage}/>
      </div>
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

export default geofag