const numeros = [8, 11, 4, 1];

let maiorNumero = numeros[0];
let menorNumero = numeros[0];

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] > maiorNumero) {
        maiorNumero = numeros[i];
    }
}

for (let i = 0; i < numeros.length; i++) {
    if(numeros[i] < menorNumero) {
        menorNumero = numeros[i];
    }
}

const diferenca = maiorNumero - menorNumero;

console.log(diferenca);