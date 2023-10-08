const express = require('express');

const { cadastrarAutor, visualizarAutor } = require('./controllers/autores');
const { cadastrarLivro, visualizarLivros } = require('./controllers/livros');

const routes = express();

routes.post('/autor', cadastrarAutor);
routes.get('/autor/:id', visualizarAutor);
routes.post('/autor/:id/livro', cadastrarLivro);

routes.get('/livro', visualizarLivros);

module.exports = routes;