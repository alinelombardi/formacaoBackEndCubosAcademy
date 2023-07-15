

const array = [1, 2, 3, 4, 5, 6];
const acessarA = array[0];
console.log(acessarA)

//Desestruturação de Arrays
const [a, b, ...resto] = array; // o ...resto tem sempre que ser o ultimo elemento

console.log(a, b, resto)