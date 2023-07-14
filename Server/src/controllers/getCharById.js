const URL = "https://rickandmortyapi.com/api/character/"
const express = require("express")
const axios = require("axios")
function getCharById(req, res) {
  const id = req.params.id;
  axios(URL + id)
    .then((response) => {
      if (response.ok) {
        const obj = {
          id: response.data.id,
          status: response.data.status,
          name: response.data.name,
          species: response.data.species,
          origin: response.data.origin,
          image: response.data.image,
          gender: response.data.gender
        };
        res.json(obj);
      } else {
        res.status(404).json({ error: "Not fount" });
      }
    })
    .catch((error) => {
      console.error("Error en la petición:", error);
      res.status(500).json({ error: error.message });
    });
}
module.exports = getCharById