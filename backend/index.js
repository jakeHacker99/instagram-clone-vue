// dependencies

  const express = require('express')

// config- express

  const app = express()

// endpoint

app.get('/posts', (request, response) => {
  let posts = [
    {
      caption: 'burger mansion',
      location: 'bandhagen, sweden'
    },
    {
      caption: 'biljardpalaset ',
      location: 'st:eriksplan, sweden',
    }
  ]
  response.send(posts)
})


// listen 

  app.listen( process.env.PORT|| 3000 )