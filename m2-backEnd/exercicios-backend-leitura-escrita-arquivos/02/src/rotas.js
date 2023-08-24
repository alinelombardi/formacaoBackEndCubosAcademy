const express = require('express');
const rotas = express ();
const { listarProdutos, registrarVendas } = require('./controladores/vendas');

rotas.get('/produtos', listarProdutos);
rotas.post('/produtos', registrarVendas);

module.exports = rotas