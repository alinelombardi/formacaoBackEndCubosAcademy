const express = require("express");
const { listarLivros, consultarLivro, cadastrarLivro, alterarParcialLivro, alterarLivro, excluirLivro } = require("./controladores/livros");

const roteador = express();

roteador.get("/livros", listarLivros);
roteador.get("/livros/:id", consultarLivro);
roteador.post("/livros", cadastrarLivro);
roteador.put("/livros/:id", alterarLivro);
roteador.patch("/livros/:id", alterarParcialLivro);
roteador.delete("/livros/:id", excluirLivro);

module.exports = roteador;