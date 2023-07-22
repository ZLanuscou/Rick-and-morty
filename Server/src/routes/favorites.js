const express = require('express');
const routerFav = express.Router();
const {postFav, deleteFav} = require("../controllers/handleFavorites")

routerFav.post("/", postFav)
routerFav.delete("/:id", deleteFav)

module.exports = routerFav
