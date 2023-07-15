//desestruturação de objetos

const pessoa = {
    nome: "Aline",
    altura: 1.62,
    idade: 37
};


const nome1 = pessoa.nome;
const altura = pessoa.altura;

console.log(nome1, altura)

// para desestruturar 

const {nome, idade} = pessoa; // não estou criando objeto, estou criando as constantes, que tem o mesmo nome da propriedade do objeto e atribuimos o nome do objeto. 

console.log(nome, idade)

