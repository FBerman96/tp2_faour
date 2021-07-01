import React, {useState, useEffect} from 'react';
import './App.css';
import Gifs from './gifComponents/Gifs';
import gifEffects from './gifEffects/gifEffects';



function App() {
  const [gifsValue, updateGifs] = useState([]);
  
  useEffect(function (){
   gifEffects().then(gifsValue => updateGifs(gifsValue))
  }, []) 
  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifsValue.map(useGifs => <Gifs title={useGifs.title} URL={useGifs.URL} />
        
            )
        }  
        
        
      </section>
    </div>
    
  );
}

export default App;
