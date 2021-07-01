const gifKey = 'F7btUNhCU0XGVKLX956xP7XLN9YEzEyp'

export default function gifEffects ({keyword = 'panda'} = {}) {
    
    const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

        return fetch(gifURL)
         .then(resp => resp.json())
           .then(respGif => {
             const {data} = respGif;
             const gifsValues = data.map(image => {
                
                 const {title, id, images} = image  
                 const {url} = images.original
                 return {title, id, url}
            })
            return gifsValues
           })
       

}

