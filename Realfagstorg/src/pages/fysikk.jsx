import React from 'react'
import TilbakeKnapp from '../components/tilbakeKnapp'
import Overskrift from '../components/overskrift'
import yourImage from '../photos/fysikkBg.png'

const fysikk = () => {
  return (
    <div>
        <TilbakeKnapp />
        <div style={{ backgroundImage: `url(${yourImage})`, backgroundSize:"1400px", width:"100vw", height:"100vh", marginTop:"0px",padding:"0px"}}>
          <Overskrift valgtFag="Fysikk" image={yourImage}/>
      </div>
      <blockquote cite="http://www.worldwildlife.org/who/index.html">
For 50 years, WWF has been protecting the future of nature. The world's leading conservation organization, WWF works in 100 countries and is supported by 1.2 million members in the United States and close to 5 million globally.
  </blockquote>

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

export default fysikk