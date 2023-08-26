const { contas } = require('../database/dataBase');

const verificarDuplicidade = (request, response, next) => {
    const { cpf, email } = request.body;
    const { numero_conta } = request.params;

    const cpfExistente = contas.find((conta) => {
        return conta.usuario.cpf === cpf;
    });

    const emailExistente = contas.find((conta) => {
        return conta.usuario.email === email;
    });

    const conta = contas.find((item) => {
        return item.numero_conta === numero_conta;
    });

    if (!conta) {
        if (cpfExistente && emailExistente) {
            return response.status(400).json(`Já existe uma conta com o CPF e e-mail informado!`);
        };

        if (cpfExistente) {
            return response.status(400).json(`Já existe uma conta com o CPF informado!`);
        };

        if (emailExistente) {
            return response.status(400).json(`Já existe uma conta com o e-mail informado!`);
        };
    } else {
        if (conta.numero_conta !== numero_conta) {
            if (cpfExistente && emailExistente) {
                return response.status(400).json(`Já existe uma conta com o CPF e e-mail informado!`);
            };

            if (cpfExistente) {
                return response.status(400).json(`Já existe uma conta com o CPF informado!`);
            };

            if (emailExistente) {
                return response.status(400).json(`Já existe uma conta com o e-mail informado!`);
            };
        };
    };
    
    next();
};

module.exports = verificarDuplicidade;