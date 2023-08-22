let convidados = require('../dados/convidados');

function verificaNome(nome) {
    return convidados.find(item => item === nome);
};

module.exports = verificaNome;