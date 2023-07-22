const express = require('express');
const routerUser = express.Router();
const {log} = require("../controllers/login")

routerUser.get("/login", log)
module.exports = routerUser;