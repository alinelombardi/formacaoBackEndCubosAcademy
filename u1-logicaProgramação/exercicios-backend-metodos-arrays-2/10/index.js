const numeros = [1, 98, -76, 0, 12, 19, 5, 60, 44];

const numerosPares = (numeros) => {
    const pares = numeros.filter((numero) => {
        return numero % 2 === 0;
    });
    return pares;
};

const resultado = numerosPares(numeros);
console.log(resultado);