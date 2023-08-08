const array = [1, 2, 4, 4, 6, 7, 1];

module.exports = array; //exporta as informações do array para ser utilizado em outro local. 


const arrayNumeros = [1, 2, 4, 4, 6, 7, 1];
const arrayLetras = ['a', 'b', 'c', 'd', 'e'];

module.exports =  {
    arrayNumeros: arrayNumeros,
    arrayLetras: arrayLetras
}; // exportando objeto

//ou
module.exports =  {arrayNumeros, arrayLetras}; //quando a propriedade tem o mesmo valor (nome) podemos deixar desta forma.  
