const express = require("express");
const { listarConvidados, incluirConvidado, deletarConvidado } = require("./controladores/convidados");

const roteador = express();

roteador.get("/convidados", listarConvidados);
roteador.post("/convidados", incluirConvidado);
roteador.delete("/convidados/:nome", deletarConvidado);

module.exports = roteador;