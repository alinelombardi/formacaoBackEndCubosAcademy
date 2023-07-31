const numeros = [0, 122, 4, 6, 7, 8, 44];


const verificaPar = (numeros) => {
    const par = numeros.every((numero) => {
        return numero % 2 === 0
    });

    if (par) {
        return "array válido";
    } else {
        return "array inválido";
    }
};

const resposta = verificaPar(numeros);
console.log(resposta);

