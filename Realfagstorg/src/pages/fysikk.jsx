import React from 'react'
import TilbakeKnapp from '../components/tilbakeKnapp'
import Overskrift from '../components/overskrift'
import yourImage from '../photos/fysikkBg.png'
import Knappvalg from '../components/knappValg'

const fysikk = () => {
  return (
    <div>
        <TilbakeKnapp />
        <div style={{ backgroundImage: `url(${yourImage})`, backgroundSize:"1400px", width:"100vw", height:"100vh", marginTop:"0px",padding:"0px"}}>
          <Overskrift valgtFag="Fysikk" image={yourImage}/>
        </div>
        <Knappvalg fag1="FY1" fag2="FY2"
        fag1Tekst="
        Hei
        "
        fag2Tekst="
        Halla
        "
        />

    </div>
  )
}

export default fysikk