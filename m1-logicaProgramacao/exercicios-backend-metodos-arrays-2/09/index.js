const numeros = [10, 987, -886, 0, 12, 199, -45, -67];

const numerosPositivos = (numeros) => {
    const positivos = numeros.filter((numero) => {
        return numero > 0;
    });
    return positivos;
};

const resultado = numerosPositivos(numeros);
console.log(resultado);

