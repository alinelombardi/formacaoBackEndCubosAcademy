const express = require('express');
const { listaGeral, procuraCarro } = require('./controladores/carros');
const validaSenha = require('./intermediarios');

const app = express();

app.use(validaSenha);

app.get('/carros/:id', listaGeral);
app.get('/carros', procuraCarro)

app.listen(3000);