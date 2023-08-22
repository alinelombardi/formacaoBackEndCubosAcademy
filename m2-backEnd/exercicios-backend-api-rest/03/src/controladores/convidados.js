let convidados = require('../dados/convidados');
let verificaNome = require('../intermediarios/utils');

const listarConvidados = (request, response) => {
    const { nome } = request.query;

    if (!nome) {
        return response.status(200).json(convidados);
    };

    const convidado = verificaNome(nome);

    if (!convidado) {
        return response.status(404).json(`O convidado buscado não está presente na lista.`);
    };

    return response.status(200).json(`Convidado presente.`);
};

const incluirConvidado = (request, response) => {
    const { nome } = request.body;

    const convidado = verificaNome(nome);

    if (convidado) {
        return response.status(404).json(`O nome do convidado a ser adicionado já existe na lista. Caso queria adicionar outro convidado de mesmo nome, favor fornecer o sobrenome também.`)
    };

    convidados.push(nome);
    return response.status(200).json({ mensagem: `Convidado adicionado.` });
};

const deletarConvidado = (request, response) => {
    const { nome } = request.params;

    const convidado = verificaNome(nome);

    if(!convidado) {
        return response.status(404).json({mensagem: `O nome do convidado a ser removido não existe na lista. Nenhum convidado foi removido.`});
    };

    const indice = convidados.indexOf(convidado);
    convidados.splice (indice, 1);

    return response.status(200).json({mensagem: `Convidado removido.`})
};

module.exports = { listarConvidados, incluirConvidado, deletarConvidado };