// split - transforma uma string em um array de strings menores, separando-a em todos os lugares onde encontrar o argumento text. 

const nomeCompleto = "Aline Lombardi Fernandes";
const array = nomeCompleto.split(" ");
const nomedoMeio = array[1];
const primeiroNome = array[0];
const ultimoNome = array[2];

console.log(nomedoMeio)
console.log(primeiroNome)
console.log(ultimoNome)

const nome = "aline lombardi fernandes";
const arrayNomes = nome.split(" ");
let nomeF = "";

for(let item of arrayNomes){
    let primeiraLetra = item.slice(0, 1);
    let restante = item.slice(1)
    nomeF += primeiraLetra.toUpperCase() + restante + " ";
   
}

console.log(nomeF.trim())