const lodash = require('lodash'); //importa toda a biblioteca

//const array = [1, 2, 4, 4, 6, 7, 1];
const arrayUnico = lodash.uniq(array); // assim que utilizamos a biblioteca, esse método retira os números iguais
console.log(arrayUnico);

const { uniq } = require('lodash'); //desestrutura a biblioteca e neste caso estamos importante apenas esse método uniq
const arrayUnico2 = uniq(array); // aqui usamos apenas o metodo importado
console.log(arrayUnico2);

const array = require('./array'); //importando as informações do arquivo array.js, não necessáriamente precisamos colocar a extensão;
console.log(array.arrayNumeros); // acessando as informações do objeto
console.log(array.arrayLetras);

const { arrayNumeros, arrayLetras } = require('./array'); // importar desestruturando o objeto
console.log(arrayNumeros);
console.log(arrayLetras);