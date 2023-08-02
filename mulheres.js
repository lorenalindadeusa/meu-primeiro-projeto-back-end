const express = require("express")
const router = express.Router()
const app = express ()
const porta = 3333
const mulheres = [{nome: "Ana Lorena", 
imagem: "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png", 
minibio: "Aprendiz"
}, 
{nome: "Iana", 
imagem: "https://media.licdn.com/media/AAYQAQSOAAgAAQAAAAAAAB-zrMZEDXI2T62PSuT6kpB6qg.png",
minibio: "Dev"}]


function mostraMulheres(request, response) {
response.json (mulheres)
}
function mostraPorta() {console.log("Servidor criado e rodando na porta ", porta)}

app.use(router.get("/mulheres", mostraMulheres))
app.listen(porta, mostraPorta)