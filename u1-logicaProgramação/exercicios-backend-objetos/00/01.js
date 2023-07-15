//objeto

const pessoa = {
    //membro ou propriedade do objeto, são as variáveis que ficam dentro do objeto e as informações são relacionadas ao objeto
    nome: "Aline",
    altura: 1.62,
    idade: 37
};

console.log(pessoa); // imprime todas as informações do objeto

console.log(pessoa.altura); // imprime apenas a propriedade altura do objeto pessoa. 

pessoa.nome = "Pedro"; // alterou a atribuição do nome. 

console.log(pessoa.nome); // irá imprimir Pedro
