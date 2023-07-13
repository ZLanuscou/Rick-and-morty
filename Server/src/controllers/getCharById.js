const axios = require('axios');
function getCharById(res, id) {
  axios(`https://rickandmortyapi.com/api/character/${id}`)  
  .then(({data})=>{
    if(data.name){ 
   const pj = {
    id: id,
    name: data.name,
    gender: data.gender,
    species: data.species,
    origin: {
        name: data.origin.name,
        url: data.origin.url
    },
    image: data.image,
    status: data.status
   }
   res.writeHead(200, {"Content-Type":"application/json"})
   res.end(JSON.stringify(pj))
}
  }).catch((error)=>{
    res.writeHead(500, {"Content-Type":"text/plain"})
    res.end({message:error})
  })
}
module.exports = getCharById