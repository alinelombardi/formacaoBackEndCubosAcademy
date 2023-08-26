const { differenceInMilliseconds } = require('date-fns');

function taValendoPromocao(inicioPromocao, momentoSolicitacao) {
    const duracaoPromocao = 24 * 60 * 60 * 1000; // 24 horas em milissegundos

    const diferenca = differenceInMilliseconds(momentoSolicitacao, inicioPromocao);

    return diferenca <= duracaoPromocao;
}


const inicioPromocao = new Date(Date.UTC(2023, 7, 26, 10, 0, 0));
const momentoSolicitacao1 = new Date(Date.UTC(2023, 7, 26, 15, 0, 0)); 
const momentoSolicitacao2 = new Date(Date.UTC(2023, 7, 27, 12, 0, 0)); 

console.log(taValendoPromocao(inicioPromocao, momentoSolicitacao1)); 
console.log(taValendoPromocao(inicioPromocao, momentoSolicitacao2)); 