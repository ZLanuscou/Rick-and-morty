const app = require('../src/app');
const session = require('supertest');
const agent = session(app);
const user = require("../src/utils/users")
describe("Test de RUTAS", ()=>{
    describe("GET /rickandmorty/character/:id", ()=>{
        it("Responde con status: 200", async()=>{
            await agent.get('/character/1').expect(200);  
        })
        it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async()=>{
           let response = await agent.get('/character/1')
           expect(response.body).toHaveProperty(
            "id",
            "name",
            "species",
            "gender",
            "status",
            "origin",
            "image"
          );
        })
        it("Si hay un error responde con estatus 500", async()=>{
       let response = await agent.get('/character/10000')
       expect(response.status).toBeGreaterThan(400)
        })
    })
    describe("GET /user/login", ()=>{
        it("En caso de que los datos sean correctos acces debe ser true",async()=>{
            let {email} = user[0]
            let {password} = user[0]
         let response = await agent.get(`/user/login?email=${email}&password=${password}`)
         expect(response.body).toEqual({access: true})
        })
        it ("En caso de que sean incorrectos acces es false", async()=>{
            let email = "contraIncorrecta"
            let password = "contraInconrrecta"
            let response = await agent.get(`/user/login?email=${email}&password=${password}`)
         expect(response.body).toEqual({access: false})
        })
    })
    describe("POST /fav", ()=>{
        const element = { id: 1, name: "Rick Sanchez" }
        const element2 = { id: 2, name: "segundo Sanchez" }
        it("El body debe devolver un arreglo con el elemento", async()=>{
            let response = await agent.post("/fav").send(element)
            expect(response.body).toContainEqual(element)

        })
        it("espera que contenga el nuevo elemento enviado", async()=>{
            
            let response = await agent.post("/fav").send(element)
           expect(response.body).toContainEqual(element)
           expect(response.body).toContainEqual(element2)
           
        })
    })
    describe("DELETE/fav/:id",()=>{
it("En caso de que no exista el id no se modifica nada", async()=>{
let Inicialresponse = await agent.get("/fav/")   
 await agent.delete("/fav/1000")
let finalResponse = await agent.get("/fav/")
expect(Inicialresponse.body).toEqual(finalResponse.body)
})
it("En caso de que exista debe eliminar", async()=>{
    let Inicialresponse = await agent.get("/fav/")   
 await agent.delete("/fav/100")
let finalResponse = await agent.get("/fav/")
expect(finalResponse.body).not.toContainEqual({id:100})
})
    })
})