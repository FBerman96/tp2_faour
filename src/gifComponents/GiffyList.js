import React, {useState, useEffect} from 'react'
import Gifs from './Gifs'
import gifEffects from '../gifComponents/gifEffects';

export default function GiffyList({params}){
    const {keyword} = params
    

    const [gifsValue, updateGifs] = useState([]);
  
    useEffect(function (){
     gifEffects({keyword}).then(gifsValue => updateGifs(gifsValue))
    }, [keyword]) 

    return gifsValue.map((useGifs) => <Gifs title={useGifs.title} url={useGifs.url} 
     key={useGifs.id}
     
     
     />
   
    )}
