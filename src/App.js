import React from 'react';
import './App.css';
import GiffyList from './gifComponents/GiffyList';
import {Link, Route } from "wouter"
import styled from 'styled-components'

function App() {
  const TitleTP = styled.button`background: transparent;
  border-radius: 3px;
  border-width: 3px;
  border: 2px solid palevioletred;
  color: palevioletred;
  margin-buttom: 2em;
  padding: 0.25em 1em;
  border-style: inset;
  `
  
  return (
    
    <div className="App">
      
      <section className="App-content">
      <div className="Titulo">
        <TitleTP>Listado de GIFS</TitleTP>
      </div>
      <nav>
        <Link to='http://localhost:3000/' className="a">Inicio</Link>
        <Link to='/Gifs/Angry Panda' className="b">El Panda</Link>
        <Link to='/Gifs/Matrix' className="c">Matrix</Link>
        <Link to='/Gifs/Maraton' className="d">Maraton</Link>
        <Link to='/Gifs/Pokemon' className="e">Pokemon</Link>
        <Link to='/Gifs/Angry Birds' className="f">Angry Birds</Link>
        <Route path="/Gifs/:keyword" component={GiffyList} />
      </nav>  
      </section>
    </div>
    
  );
}

export default App;
