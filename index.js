const express = require('express');
const bodyParser = require('body-parser');
const conexao = require('./database/database')

const app = express();


//CONFIGURAÇÃO DA PASTAS STATICAS
app.set("view engine", "ejs")
app.use(express.static("public"))


//CONFIGURAÇÃO DO BODYPARSET
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


//CONFIGURAÇÃO DO JSON
app.use(express.json())


//CONFIGURAÇÃO DO BANCO DE DADOS
conexao.authenticate().then( ()=>{
  console.log(" Conexão realizada com sucesso!")
}).catch((error)=>{console.log(error)})


//ROTAS
app.get("/", (request, response) => {
  return response.render("index")
})

app.get("/login", (request, response) => {
  return response.render("admin/usuario/logon")
})


//SERVIDOR CONFIG
const port = process.env.PORT || 4000
app.listen(port, ()=>{
  console.log('Server online, localhost:'+port);
})