const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const valorReduce = numeros.reduce((x, numero) => {
    return Math.max(x, numero)
});

console.log(valorReduce);