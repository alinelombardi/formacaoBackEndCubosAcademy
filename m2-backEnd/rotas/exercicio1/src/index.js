const express = require('express');
const { listaGeral, procuraCarro } = require('./controladores/carros');

const app = express();

app.get('/carros/:id', listaGeral);
app.get('/carros', procuraCarro)

app.listen(3000);