const {Favorite} = require("../DB_connection")
const postFav = async(req, res)=>{
    try {
        const{id, name, origin, status, image, species, gender} = req.body
if(!name || !origin || !status || !image || !species || !gender || !id)return res.status(401).send("Faltan datos")
await Favorite.findOrCreate({where:{name, origin, status, image, species, gender, id}})
const allFavorites = await Favorite.findAll()
return res.status(200).json(allFavorites)
    } catch (error) {
       return res.status(500).json({error: error.message}) 
    }

};
module.exports = postFav;