const array = [0, 1, 2, 3, 4];
// 0 foi pego como acumulador

const valorReduce = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
});

console.log(valorReduce);



const valorReduce2 = array.reduce((acumulador, elementoAtual, indice, array) => {
    return acumulador + elementoAtual;
}, 10);
// neste caso o acumulador recebeu o valor 10, pois foi passado como argumento
console.log(valorReduce2);