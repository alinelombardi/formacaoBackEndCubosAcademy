const express = require('express');
const rotas = express();
const { mostrarPokemons, exibirPokemon } = require('./controladores/pokemons')

rotas.get('/pokemon', mostrarPokemons);
rotas.get('/pokemon/:informacao', exibirPokemon);

module.exports = rotas;