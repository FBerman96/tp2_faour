import React from 'react'
import './Gifs.css'


export default function Gifs ({title, url, sGifs}){
  return (
        <a href={`#${title}`} className='Gifs'>
          <h4>{title}</h4>
          <small></small>
          <img alt={sGifs} src={url}  />
        </a>
    )

}