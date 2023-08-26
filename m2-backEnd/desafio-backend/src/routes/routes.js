const express = require('express');
const routes = express();

// Intermediários
const verificarDuplicidade = require('../middlewares/verificarDuplicidade');
const verificarPreenchimento = require('../middlewares/verificarPreenchimento');
const validarSenha = require('../middlewares/validarSenha');

// Controladores
const { listarContas, cadastrarConta, atualizarUsuario, deletarConta, consultarSaldo, mostrarExtrato } = require('../controllers/contasController');
const { depositar, sacar, transferir } = require('../controllers/transacoesController');

// Informações de contas e usuários
routes.get("/contas", validarSenha, listarContas);
routes.post('/contas', verificarPreenchimento, verificarDuplicidade, cadastrarConta);
routes.put('/contas/:numero_conta/usuario', verificarPreenchimento, verificarDuplicidade, atualizarUsuario);
routes.delete('/contas/:numero_conta', deletarConta);
routes.get('/contas/saldo', consultarSaldo);
routes.get('/contas/extrato', mostrarExtrato);

// Informações das transações
routes.post('/transacoes/depositar', depositar);
routes.post('/transacoes/sacar', sacar);
routes.post('/transacoes/transferir', transferir);

module.exports = routes;