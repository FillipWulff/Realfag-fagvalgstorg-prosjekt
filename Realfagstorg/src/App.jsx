import "./App.css"
import Homepage from './pages/Homepage'
import It from './pages/It';
import biologi from './pages/biologi';
import fysikk from './pages/fysikk';
import geofag from './pages/geofag';
import kjemi from './pages/kjemi';
import rmatte from './pages/rmatte';
import smatte from './pages/smatte';
import tekforsk from './pages/tekforsk';
function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Homepage
      break;
    case "/Fysikk":
      Component = fysikk
      break;
    case "/Kjemi":
      Component = kjemi
      break;
    case "/Informasjonsteknologi":
      Component = It
      break;
    case "/sMatte":
      Component = smatte
      break;
    case "/rMatte":
      Component = rmatte
       break;
    case "/Tekforsk":
      Component = tekforsk
      break;
    case "/Biologi":
      Component= biologi
      break;
    case "/Geofag":
      Component= geofag
      break;
    
  }
  return (
    <Component />
  )
}

export default App
