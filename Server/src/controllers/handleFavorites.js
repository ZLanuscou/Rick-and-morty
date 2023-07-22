const express = require("express")
var myFavorites = []
function postFav(req, res) {
    myFavorites.push(req.body)
   return res.json(myFavorites)
}
function deleteFav(req, res) {
    const {id} = req.params
    const filtro = myFavorites.filter((char)=> char.id !== Number(id))
    myFavorites = filtro
   return res.json(myFavorites)
}
module.exports = {postFav, deleteFav}