const jogadores = require('../bancoDados');
let jogadorDaVez = 0;

const mostraNome = (request, response) => {
    const nomeDoJogador = jogadores[jogadorDaVez];
    jogadorDaVez++

    if(jogadorDaVez >= jogadores.length) {
        jogadorDaVez = 0;
    }    

    return response.send(`É a vez de ${nomeDoJogador} jogar!`)
};

const remover = (request, response) => {
    const { indice } = request.query;

    if(indice >= jogadores.length) {
        response.send(`Não existe jogador no índice informado ${indice} para ser removido.`);
    } else {
        jogadores.splice(indice, 1);        
        response.send(jogadores);  
    }
}

const adicionar = (request, response) => {
    let nome = request.query.nome;
    const indice = Number(request.query.indice);

    nome = `${nome[0].toUpperCase()}${nome.slice(1).toLowerCase()}`;

    if(isNaN(indice) || indice >= jogadores.length) {
        return response.send(`O índice informado ${indice} não existe no array. Novo jogador não foi adicionado.`);
    }

    if(!indice) {
        jogadores.push(nome);
        return response.send(jogadores);
    }

    jogadores.splice(indice, 0, nome);
    return response.send(jogadores);
}

module.exports = {
    mostraNome,
    remover,
    adicionar
};