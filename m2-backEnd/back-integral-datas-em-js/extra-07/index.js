const { differenceInDays } = require('date-fns');

function taValendoPromocao(inicioPromocao, momentoSolicitacao) {
    const duracaoDias = 30;

    const diferencaDias = differenceInDays(momentoSolicitacao, inicioPromocao);

    return diferencaDias <= duracaoDias;
}

const inicioPromocao = new Date(2023, 7, 1);
const momentoSolicitacao1 = new Date(2023, 7, 20);
const momentoSolicitacao2 = new Date(2023, 8, 1);

console.log(taValendoPromocao(inicioPromocao, momentoSolicitacao1));
console.log(taValendoPromocao(inicioPromocao, momentoSolicitacao2));