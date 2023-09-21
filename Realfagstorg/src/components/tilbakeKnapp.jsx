import React from 'react'

const TilbakeKnapp = () => {
    function goToSite(){
        window.location.href = "/"
    }
  return (
    <div>
        <button id ="tilbake" onClick={goToSite}>TILBAKE TIL HOVEDSIDEN</button>
    </div>
  )
}

export default TilbakeKnapp