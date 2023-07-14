const numeros = [3, 4, 7, 8, 1, 6, 5, 10];

let arrayPar = [];
let soma = 0;

for (let numero of numeros) {
    if(numero % 2 == 0) {
        arrayPar.push(numero);
    }
}
for(let somaPar of arrayPar) {
    soma += somaPar
}
console.log(`A soma do array [${arrayPar}] é ${soma}`)

