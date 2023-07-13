const http = require("http")
const getCharById = require("./controllers/getCharById")
const PORT = 3000

http.createServer((req, res)=>{
res.setHeader('Access-Control-Allow-Origin', '*');
if(req.url.includes("/rickandmorty/character")){
 const id = req.url.split("/").at(-1)
 getCharById(res, id)
}
}).listen(PORT, ()=>{
  console.log("servidor funcionando en puerto 3001")
})