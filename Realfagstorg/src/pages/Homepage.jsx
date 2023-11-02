import React from 'react'
import "./Homepage.css"

const Homepage = () => {
  return (
    <div>    
    <div id ="main">
    <div id="valgmuligheter">
     <a href='/Fysikk'>
       <button class="button-19"  role="button" >FYSIKK</button>
     </a>
     <a href='/Biologi'>
       <button class="button-19"  role="button" >BIOLOGI</button>
     </a>
     <a href='/Kjemi'>
       <button class="button-19"  role="button">KJEMI</button>
     </a>
     <a href='/Informasjonsteknologi'>
       <button class="button-19"  role="button" >INFORMASJONSTEKNOLOGI</button>
     </a>
     <a href='/Tekforsk'>
       <button class="button-19"  role="button">TEKNOLOGI OF FORSKNINGSLÆRE</button>
     </a>
     <a href='/Geofag'>
       <button class="button-19"  role="button">GEOFAG</button>
     </a>
     <a href='/sMatte'>
       <button class="button-19"  role="button">MATEMATIKK FOR SAMFUNNSFAG</button>
     </a>
     <a href='/rMatte'>
       <button class="button-19"  role="button">MATEMATIKK FOR REALFAG</button>
     </a>
   </div>
   <div id="bakgrunn">
     <h1>Realfag<br></br> valgtorg</h1>
     <p>Trykk på faget du vil utforske</p>
   </div>
 </div></div>
  )
}

export default Homepage