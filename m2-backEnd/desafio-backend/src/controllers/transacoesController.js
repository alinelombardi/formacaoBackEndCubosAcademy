const { format } = require('date-fns');
let { contas, saques, depositos, transferencias } = require('../database/dataBase');
const verificarConta = require('../middlewares/utils');

const dataAtual = new Date();
const dataFormatada = format(dataAtual, 'yyyy-MM-dd HH:mm:ss');

const depositar = (request, response) => {
    const { numero_conta, valor } = request.body;

    if (!numero_conta || !valor) {
        return response.status(400).json({ mensagem: "O número da conta e o valor são obrigatórios!" });
    };

    const conta = verificarConta(numero_conta, contas);

    if (!conta) {
        return response.status(404).json({ mensagem: 'Conta bancária não encontrada!' });
    };

    if (valor <= 0) {
        return response.status(404).json({ mensagem: 'Não é possível realizar deposito de valor menor que zero' });
    };

    const deposito = {
        data: dataFormatada,
        numero_conta,
        valor
    };

    depositos.push(deposito);
    conta.saldo += valor;

    return response.status(204).send();
};

const sacar = (request, response) => {
    const { numero_conta, valor, senha } = request.body;

    if (!numero_conta || !valor || !senha) {
        return response.status(400).json({ mensagem: "O número da conta, senha e o valor são obrigatórios!" });
    };

    const conta = verificarConta(numero_conta, contas);

    if (!conta) {
        return response.status(404).json({ mensagem: 'Conta bancária não encontrada!' });
    };

    if (conta.usuario.senha !== senha) {
        return response.status(401).json({ mensagem: 'A senha informada é inválida!' });
    };

    if (valor <= 0) {
        return response.status(404).json({ mensagem: 'Não é possível realizar deposito de valor menor que zero' });
    };

    if (conta.saldo < valor) {
        return response.status(404).json({ mensagem: 'O valor não pode ser maior que o saldo' });
    };

    const saque = {
        data: dataFormatada,
        numero_conta,
        valor
    };

    saques.push(saque);
    conta.saldo -= valor;

    return response.status(204).send();
}

const transferir = (request, response) => {
    const { numero_conta_origem, numero_conta_destino, valor, senha } = request.body;

    if (!numero_conta_origem || !numero_conta_destino || !valor || !senha) {
        return response.status(400).json({ mensagem: "Os números das contas, senha e o valor são obrigatórios!" });
    };

    const contaOrigem = contas.find((item) => {
        return item.numero_conta === Number(numero_conta_origem);
    });

    const contaDestino = contas.find((item) => {
        return item.numero_conta === Number(numero_conta_destino);
    });

    if (!contaOrigem) {
        return response.status(404).json({ mensagem: 'Conta de origem não encontrada' });
    };

    if (!contaDestino) {
        return response.status(404).json({ mensagem: 'Conta de destino não encontrada' });
    };

    if (contaOrigem.usuario.senha !== senha) {
        return response.status(401).json({ mensagem: 'A senha informada é inválida!' });
    };;

    if (valor <= 0) {
        return response.status(404).json({ mensagem: 'Não é possível realizar deposito de valor menor que zero' });
    };

    if (contaOrigem.saldo < valor) {
        return response.status(404).json({ mensagem: 'O valor não pode ser maior que o saldo' });
    };

    const transferencia = {
        data: dataFormatada,
        numero_conta_origem,
        numero_conta_destino,
        valor
    };

    transferencias.push(transferencia);

    contaOrigem.saldo -= valor;
    contaDestino.saldo += valor;

    return response.status(200).json(transferencia);
};

module.exports = { depositar, sacar, transferir };