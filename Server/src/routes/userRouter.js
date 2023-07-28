const express = require('express');
const routerUser = express.Router();
const login = require("../controllers/login")
const postUser = require("../controllers/postUser")
routerUser.get("/login", login)
routerUser.post("/login", postUser)
module.exports = routerUser;