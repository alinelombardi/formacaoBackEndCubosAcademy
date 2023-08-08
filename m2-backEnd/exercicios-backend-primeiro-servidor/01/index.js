const express = require('express');
const app = express();

const jogadores = ["José", "Maria", "João", "Marcos", "Fernanda"];
let jogador = 0;


app.get('/', (request, response) => {
    let nomeDoJogador = jogadores[jogador];
    jogador++
    if(jogador >= jogadores.length) {
        jogador = 0;
    }
    response.send(`É a vez de ${nomeDoJogador} jogar!`);
});


app.listen(3000);