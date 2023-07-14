const original = [1, 4, 12, 21, 53, 88, 112];
let arrayPar = [];

for (let numero of original) {
    if(numero % 2 == 0) {
        arrayPar.push(numero);
    }
}
console.log(arrayPar);