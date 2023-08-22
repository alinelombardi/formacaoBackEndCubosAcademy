let { instrutores } = require('../bancoDados');
let { identificadorInstrutor } = require('../bancoDados');

const listarInstrutores = (request, response) => {
    return response.status(200).json(instrutores);
};

const listarInstrutor = (request, response) => {
    const { id } = request.params;

    const instrutor = instrutores.find((item) => {
        return item.id === Number(id);
    })
    
    if(!instrutor) {
        return response.status(404).json({message: 'Instrutor não foi localizado'});
    }

    return response.status(200).json(instrutor);
};

const cadastrarInstrutor = (request, response) => {
    const { nome, email, status } = request.body;

    if (!nome) {
        return response.status(400).json({message: 'O nome é obrigatório'})
    }

    if (!email) {
        return response.status(400).json({message: 'O email é obrigatório'})
    }

    const instrutor = {
        id: identificadorInstrutor++,
        nome,
        email,
        status: status ?? true, //nova forma de usar o ||, poderia ter usado o ternário também, se o status não for passado no corpo da requisição, colocaremos o campo preenchido comm true.
    }

    instrutores.push(instrutor);
    return response.status(201).json({message: 'Instrutor cadastrado', instrutor})
}

const alterarInstrutor = (request, response) => {
    const { id } = request.params;
    const { nome, email, status } = request.body;

    
    if (!nome) {
        return response.status(400).json({message: 'O nome é obrigatório'})
    }

    if (!email) {
        return response.status(400).json({message: 'O email é obrigatório'})
    }

    const instrutor = instrutores.find((item) => {
        return item.id === Number(id);
    })
    
    if(!instrutor) {
        return response.status(404).json({message: 'Instrutor não foi localizado'});
    }

    //sobrescrevendo dados do instrutor
    instrutor.nome = nome;
    instrutor.email = email;
    instrutor.status = status;

    return response.status(204).json({message: 'Instrutor alterado com sucesso.'})

}

const alterarStatus = (request, response) => {
    const { id } = request.params;
    const { status } = request.body;

    
    const instrutor = instrutores.find((item) => {
        return item.id === Number(id);
    })
    
    if(!instrutor) {
        return response.status(404).json({message: 'Instrutor não foi localizado'});
    }

    instrutor.status = status;

   return response.status(204).json({ message: 'Status alterado com sucesso' });
}

const deletarInstrutor = (request, response) => {
    const { id } = request.params;

    const instrutor = instrutores.find((item) => {
        return item.id === Number(id);
    });

    if(!instrutor) {
        return response.status(404).json({message: 'Instrutor não foi localizado'});
    };

    instrutores = instrutores.filter((instrutor) => {
        return instrutor.id !== Number(id);
    })

    return response.status(204).json({ message: 'Instrutor deletado com sucesso' });

}

module.exports = { listarInstrutores, listarInstrutor, cadastrarInstrutor, alterarInstrutor, alterarStatus, deletarInstrutor };