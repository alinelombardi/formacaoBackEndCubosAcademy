let { contas, depositos, transferencias, saques } = require('../database/dataBase');
const verificarConta = require('../middlewares/utils');

let numero_conta = 1;
const resultado = [];

// Listar todas as contas
const listarContas = (request, response) => {
    if (contas.length === 0) {
        return response.status(404).json(contas);
    };

    return response.status(200).json(contas);
};

// Cadastrar contas
const cadastrarConta = (request, response) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = request.body;

    const cadastro = {
        numero_conta: numero_conta++,
        saldo: 0,
        usuario: {
            nome,
            cpf,
            data_nascimento,
            telefone,
            email,
            senha
        }
    };

    contas.push(cadastro);

    return response.status(201).send();
};

// Atualizar dados do usuário
const atualizarUsuario = (request, response) => {
    const { nome, cpf, data_nascimento, telefone, email, senha } = request.body;
    const numero_conta = Number(request.params.numero_conta);

    const conta = verificarConta(numero_conta, contas);

    if (!conta) {
        return response.status(404).json({ mensagem: 'Conta bancária não encontrada!' });
    };

    conta.usuario.nome = nome;
    conta.usuario.cpf = cpf;
    conta.usuario.data_nascimento = data_nascimento;
    conta.usuario.telefone = telefone;
    conta.usuario.email = email;
    conta.usuario.senha = senha;

    return response.status(204).send();
};

const deletarConta = (request, response) => {
    const numero_conta = Number(request.params.numero_conta);

    if (isNaN(numero_conta)) {
        return response.status(400).json({ mensagem: "O número da conta informado não é válido." });
    };

    const conta = verificarConta(numero_conta, contas);

    if (!conta) {
        return response.status(404).json({ mensagem: 'Conta bancária não encontrada!' });
    };

    if (conta.saldo > 0) {
        return response.status(404).json({ mensagem: 'A conta só pode ser removida se o saldo for zero!' });
    };

    contas = contas.filter((conta) => {
        return conta.numero_conta !== numero_conta;
    });

    return response.status(204).send();
};

const consultarSaldo = (request, response) => {
    const { numero_conta, senha } = request.query;

    if (!numero_conta || !senha) {
        return response.status(404).json({ mensagem: 'Informe senha e numero da conta' });
    };

    if(isNaN(Number(numero_conta))) {
        return response.status(400).json({ mensagem: "O número da conta informado não é válido." });
    };

    const conta = verificarConta(numero_conta, contas);

    if(!conta) {
        return response.status(404).json({ mensagem: 'Conta bancária não encontrada!' });
    };

    if(conta.usuario.senha !== senha) {
        return response.status(401).json({ mensagem: 'A senha informada é inválida!' });
    };

    return response.status(200).json({ saldo: conta.saldo } )
};

const mostrarExtrato = (request, response) => {
    const { numero_conta, senha } = request.query;

    if( !numero_conta || !senha) {
        return response.status(400).json({ mensagem: 'O numero da conta e senha é de preenchimento obrigatório'})
    };

    const conta = verificarConta(numero_conta, contas);

    if(!conta) {
        return response.status(404).json({ mensagem: 'Conta bancária não encontrada!' });
    };
    
    if(conta.usuario.senha !== senha) {
        return response.status(401).json({ mensagem: 'A senha informada é inválida!' });
    };

    const filtrarSaques = saques.filter((saque) => {
        return saque.numero_conta === numero_conta;
    });

    const filtrarDepositos = depositos.filter((deposito) => {
        return deposito.numero_conta === numero_conta;
    });

    const filtrarTransferenciasEnviadas = transferencias.filter((transferencia) => {
        return transferencia.numero_conta_origem === numero_conta;
    });

    const filtrarTransferenciasRecebidas = transferencias.filter((transferencia) => {
        return transferencia.numero_conta_destino === numero_conta;
    });

    resultado.push({
        depositos: filtrarDepositos,
        saques: filtrarSaques,
        transferenciasEnviadas: filtrarTransferenciasEnviadas,
        transferenciasRecebidas: filtrarTransferenciasRecebidas
    });

    return response.status(200).json(resultado);
};

module.exports = { listarContas, cadastrarConta, atualizarUsuario, deletarConta, consultarSaldo, mostrarExtrato };