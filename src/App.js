import './App.css';
import Map from './Components/Map/Map';
import Header from './Components/Header/Header';
import './App.css'
import { useEffect } from 'react';


function App() {

  // Page title -
  useEffect(
    () => { 
       document.title = 'CAPITAL CITIES GIS APP';
    }, []
  )

  return (
    <div className='app-container'>

      {/* Header component */}
      <Header className='item'/>

      {/* Map component */}
      <Map className='item'/>
      
    </div>
  );
}

export default App;
