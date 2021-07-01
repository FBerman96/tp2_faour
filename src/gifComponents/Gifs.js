import React from 'react'

export default function Gifs ({title, url, sGifs}){

    console.log(url)
    
    return (
        <div>
          <h4>{title}</h4>
          <img alt={sGifs} src={url} />
        </div>
    )

}