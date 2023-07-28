const express = require('express');
const server = require("./app");
const PORT = 3000;
const { conn } = require('./DB_connection');
conn.sync({force:true}).then(()=>{
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
})
