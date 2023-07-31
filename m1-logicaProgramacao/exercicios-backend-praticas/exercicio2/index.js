// Cinco ou mais, um de graça

function solucao(precos) {

    let quantidade = precos.length;
    let soma = 0;
    let menor = precos[0];

    for (let valor of precos) {
        soma += valor;
        if (valor < menor) {
            menor = valor;
        }
    }

    if (quantidade >= 5) {
        soma -= menor;

    } else {
        soma;
    }

    return soma;
}

const precos = [100, 500, 100, 200, 50];
const resposta = solucao(precos);
console.log(resposta)