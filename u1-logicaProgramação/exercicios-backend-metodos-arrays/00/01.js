

const lista = ["Eu", "Tu", "Eles"];

// Includes
const boolean = lista.includes("Tu");
console.log(boolean); //true

// indexOf
const indice = lista.indexOf("Tu");
console.log(indice); //1

//reverse - modifica o original
const resultado = lista.reverse();
console.log(resultado); // [ 'Eles', 'Tu', 'Eu' ]

const numeros = [1, 2, 3, 4, 5, 6];
const resultadoNumeros = numeros.reverse();
console.log(numeros); //[ 6, 5, 4, 3, 2, 1 ]
console.log(resultadoNumeros); //[ 6, 5, 4, 3, 2, 1 ]