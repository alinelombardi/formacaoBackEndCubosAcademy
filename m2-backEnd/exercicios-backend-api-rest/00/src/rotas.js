// utilizado para separar as rotas. 

const express = require('express');
const rotas = express();
const { listarInstrutores, listarInstrutor, cadastrarInstrutor, alterarInstrutor, alterarStatus, deletarInstrutor } = require('./controladores/instrutores')

rotas.get('/instrutores', listarInstrutores);
rotas.get('/instrutores/:id', listarInstrutor);
rotas.post('/instrutores', cadastrarInstrutor);
rotas.put('/instrutores/:id', alterarInstrutor);
rotas.patch('/instrutores/:id/status', alterarStatus);
rotas.delete('/instrutores/:id', deletarInstrutor)


module.exports = rotas;