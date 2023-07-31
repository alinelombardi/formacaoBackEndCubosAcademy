const array = [
    [0, 1],
    [2, 3, 4],
    [14, 22, 98]
];

const arrayReduzido = array.reduce((acumulador, elementoAtual, indice, array) => {
    acumulador = [...acumulador, ...elementoAtual];
    return acumulador;
}, []);
// acumulador recebeu um array vazio

console.log(arrayReduzido);