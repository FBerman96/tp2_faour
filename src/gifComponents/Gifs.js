import React from 'react'

export default function Gifs ({title, url}){
    return (
        <div>
          <h4>{title}</h4>
          <img src={url} />
        </div>
    )

}