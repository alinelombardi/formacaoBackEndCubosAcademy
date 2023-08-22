// utilizado para separar as rotas. 

const express = require('express');
const rotas = express();
const { listarInstrutores, listarInstrutor, cadastrarInstrutor, alterarInstrutor, alterarStatus, deletarInstrutor } = require('./controladores/instrutores');
const { cadastrarAula, listarAulas, listarAula, verAulaInstrutores } = require('./controladores/aulas');

rotas.get('/instrutores', listarInstrutores);
rotas.get('/instrutores/:id', listarInstrutor);
rotas.post('/instrutores', cadastrarInstrutor);
rotas.put('/instrutores/:id', alterarInstrutor);
rotas.patch('/instrutores/:id/status', alterarStatus);
rotas.delete('/instrutores/:id', deletarInstrutor)

rotas.post('/instrutores/:idInstrutor/aulas', cadastrarAula);
rotas.get('/aulas', listarAulas);
rotas.get('/aulas/:id', listarAula);
rotas.get('/instrutores/:idInstrutor/aulas', verAulaInstrutores)

module.exports = rotas;