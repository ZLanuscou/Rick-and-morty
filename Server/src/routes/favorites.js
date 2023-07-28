const express = require('express');
const routerFav = express.Router();
const postFav = require("../controllers/postfav")
const deleteFav = require("../controllers/deleteFav")

routerFav.post("/", postFav)
routerFav.delete("/:id", deleteFav)

module.exports = routerFav
