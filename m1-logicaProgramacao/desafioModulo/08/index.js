function solucao(numeros) {
const quantidadeJogadores = numeros.length;
let soma = 0;
    for(let item of numeros) {
        soma +=item;
    }

    const posicao = soma % quantidadeJogadores;

    if(posicao === 0) {
        console.log(quantidadeJogadores);
    } else {
        console.log(posicao);
    }
}

const numeros = [1, 1, 1]

solucao(numeros)