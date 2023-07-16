
const nome = "ricardo";

console.log(nome.lastIndexOf("r")) // retorna se localizou ou não a string desejada, porem no fim para o começo, o indice não vai alterar, continua sendo uma contagem que inicia do 0 da esquerda para direita.                

const cidade = "Hortolândia-SP";

const index = cidade.length -2;
const estado = cidade.slice(index)
console.log(estado)

