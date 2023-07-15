//... é o spread operator, ele "espalha" o objeto

const pessoa = {
    nome: "Aline",
    altura: 1.62,
    idade: 37
};

const endereco = {
    rua: "rua",
    numero: 62,
    bairro: "Vila boa vista"
};

const objetoFundido = { // está juntando os objetos
    ...pessoa,
    ...endereco,
    novaPropriedade: "teste"
}


console.log(objetoFundido)

