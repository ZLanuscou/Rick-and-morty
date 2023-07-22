const URL = "https://rickandmortyapi.com/api/character/"
const express = require("express")
const axios = require("axios")
async function getCharById(req, res) {
  const {id} = req.params
 const response = await axios(`${URL}${id}`)
 const {data} = response
    try{ 
     
        const character = {
          id: data.id,
          status: data.status,
          name: data.name,
          species: data.species,
          origin: data.origin,
          image: data.image,
          gender: data.gender
        };
        return res.status(200).json(character);
      
    }catch(error) { 
     return res.status(500).json({error});
    }
}
module.exports = {getCharById}