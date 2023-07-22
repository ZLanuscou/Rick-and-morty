const express = require('express');
const RouterCharId = express.Router();
const {getCharById} = require("../controllers/getCharById")
RouterCharId.get("/:id", getCharById)
module.exports = RouterCharId;