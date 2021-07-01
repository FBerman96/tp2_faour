const gifKey = 'F7btUNhCU0XGVKLX956xP7XLN9YEzEyp'

export default function gifEffects ({keyword = 'panda'} = {}) {
    
    const gifURL = `https://api.giphy.com/v1/gifs/search?api_key=${gifKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en`

        return fetch(gifURL)
         .then(resp => resp.json())
           .then(respGif => {
             const {data} = respGif;
             const gifsValue = data.map(image => {
                 const {title, id, images} = image
                 const {url} = images.downsized_medium
                 return {title, id, url}
            })
             return gifsValue
           })
       

}

