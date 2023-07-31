const original = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pares = [];
const impares = [];

for (let numeros of original) {
    if(numeros % 2 === 0){
        pares.push(numeros);
    } else {
        impares.push(numeros);
    }
}

console.log(pares);
console.log(impares);