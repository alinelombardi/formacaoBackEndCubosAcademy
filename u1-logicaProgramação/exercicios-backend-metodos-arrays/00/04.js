// concat - concatena arrays


const a = [1, 2];
const b = [3, 4];
const c = [5, 6];
const concatenacao = a.concat(b, c);

console.log(concatenacao); // [ 1, 2, 3, 4, 5, 6 ]

//slice -  faz copia do original

const opcoes = ["Eu", "você", "ele", "nós"];
const resultado = opcoes.slice(1, 3); // o primeio indice entra no retorno e o ultimo indice não entra
console.log(resultado);


//Faça uma função que, dado determinado conjunto de dados, descarta os primeiros e os últimos 10% dados, aproveitando apenas os 80% centrais. 
function filtrar80(dados) {
    const startIndex = Math.round(dados.length * 10/100);
    const endIndex = Math.floor(dados.length * 90/100);
    const fatia = dados.slice(startIndex, endIndex);
    console.log(startIndex, endIndex);
    console.log(fatia);
}

const dados = [0,1,5,7,10,33,55,60,57,85,45,68,49,57,89,69,57,33,24,11,5,3,1,0,0];

filtrar80(dados);