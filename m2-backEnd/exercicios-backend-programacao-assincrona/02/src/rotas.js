const express = require('express');
const rotas = express();
const { listarProdutos, listarProduto, mostrarFrete } = require('./controladores/frete');

rotas.get('/produtos', listarProdutos);
rotas.get('/produtos/:idProduto', listarProduto);
rotas.get('/produtos/:idProduto/frete/:cep', mostrarFrete);



module.exports = rotas;