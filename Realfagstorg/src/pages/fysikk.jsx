import React from 'react'
import TilbakeKnapp from '../components/tilbakeKnapp'
import Overskrift from '../components/overskrift'
import yourImage from '../photos/fysikkBg.png'
import PendulumAnimation from '../components/fysikkAnimasjon'
import Knappvalg from '../components/knappValg'
import Eksplosjon from '../photos/eksplosjonFY1.png'




const fysikk = () => {
  

  return (
    <div>
        <TilbakeKnapp />
        <div style={{ backgroundImage: `url(${yourImage})`, backgroundSize:"1400px", width:"100vw", height:"100vh", marginTop:"0px",padding:"0px"}}>
          <Overskrift valgtFag="Fysikk 1+2" image={yourImage}/>
        </div>
        <Knappvalg fag1="FY1" fag2="FY2"
        fag1Tekst="
        Hei
        "
        fag2Tekst="
        Halla
        "
        />
        <div id="tekstboks">
          <p style={{color:'black', fontSize:"30px", marginTop:"50px"}}>
            «Det mest uforståelige med universet er at det er forståelig.»
          </p>
        </div>
        <div>
          <p style={{color:'black', fontSize:"20px", width:"500px", marginTop:"100px"}}>
          For å utnytte mulighetene som er tilgjengelige
          for oss, er vi avhengige av at vi forstår hvordan
          verden henger sammen. Det er det vi jobber
          mot i fysikkfaget. 
          </p>
          <p style={{color:'black', fontSize:"20px", width:"500px", marginTop:"20px"}}>
          Vi ser på helt dagligdagse
          fenomener og prøver å forklare hvorfor verden
          er som den er. Hvorfor er himmelen blå?
          Hvorfor faller gjenstander ned når man kaster
          dem opp i lufta? Hvorfor faller ikke månen ned
          på jorda, den er da påvirket av tyngdekraft den
          også? Hva er egentlig elektrisk strøm?
          </p>
          <p style={{color:'black', fontSize:"20px", width:"500px", marginTop:"20px"}}>
          Alt dette og mye mer får du svar på ved å
          velge fysikk på videregående. I timene har vi
          gjennomgang og jobber mye med oppgaver.
          Vi forsøker også å gjenskape verden i liten
          skala med eksperimenter hvor vi tester ut
          teorien vi lærer i timene.
          </p>
          <p style={{color:'black', fontSize:"20px", width:"500px", marginTop:"20px", marginBottom:"20px"}}>
          Merkelig nok er det slik at etter hvert som
          man forstår mer av hvordan verden fungerer,
          så framstår den bare som enda mer mystisk,
          forunderlig og fantastisk.
          </p>
          <img src={Eksplosjon} alt="Bilde av en eksplosjon" style={{width:"500px", marginLeft:"700px", marginBottom:"500px", position:"absolute"}}></img>
        </div>
        <div id='fysikkCenter'>

        <PendulumAnimation />
        </div>
    </div>
  )
}

export default fysikk