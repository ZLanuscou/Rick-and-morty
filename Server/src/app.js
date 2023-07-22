const express = require('express');
const server = express();
const PORT = 3000;
const RouterCharId = require("./routes/characters")
const routerFav = require("./routes/favorites")
const routerUser = require("./routes/userRouter")
server.use((req, res, next) => {
   res.header('Access-Control-Allow-Origin', '*');
   res.header('Access-Control-Allow-Credentials', 'true');
   res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
   );
   res.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
   );
   next();
});
server.use(express.json())

server.use('/character', RouterCharId);
server.use("/user", routerUser)
server.use("/fav", routerFav)
module.exports = server;