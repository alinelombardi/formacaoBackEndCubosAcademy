const arrayA = [5, 32, 3, 44, 1];
const arrayB = [57, 4, 21, 2, 13];

const arrayMenor = [];

for (let i = 0; i < arrayA.length; i++) {
  const menorValor = Math.min(arrayA[i], arrayB[i]);
  arrayMenor.push(menorValor);
}

console.log(arrayMenor);

