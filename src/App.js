import React, {useState, useEffect} from 'react';
import './App.css';
import Gifs from './gifComponents/Gifs';
import gifEffects from './gifComponents/gifEffects';



function App() {
  const [gifsValue, updateGifs] = useState([]);
  
  useEffect(function (){
   gifEffects({keyword: 'Panda'}).then(gifsValue => updateGifs(gifsValue))
  }, []) 

  
  return (
    <div className="App">
      <section className="App-content">
        {
          gifsValue.map((useGifs, index) => <Gifs title={useGifs.title} url={useGifs.url} 
          key={index}
          
          
          />
        
            )}  
        
        
      </section>
    </div>
    
  );
}

export default App;
