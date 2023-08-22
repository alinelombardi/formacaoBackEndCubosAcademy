const express = require('express'); //express importado
const app = express(); // express instanciado
const rotas = require('./rotas') //arquivo de rotas importado

app.use(express.json()); //método nativo do express, um middleware que aceita json
app.use(rotas); //arquivo rotas importado

app.listen(3000); //usando a porta 