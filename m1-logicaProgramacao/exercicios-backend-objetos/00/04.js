// é possivel ter um objeto dentro de outro objeto

const pessoa = {
    nome: "Aline",
    altura: 1.62,
    idade: 37,
    carro: {
        marca: "Peugeot",
        modelo: "207 passion",
        ano: 2010,
        potencia: 140
    }
};

console.log(pessoa.carro.ano);

// e é possivel criar dois objetos e adicionar o primeiro declaradado dentro do outro. 

const carro = {
    marca: "Peugeot",
    modelo: "207 passion",
    ano: 2010,
    potencia: 140

};
const pessoa1 = {
    nome: "Aline",
    altura: 1.62,
    idade: 37,
    carro //usando o shorthand, nesse caso, é a mesma coisa que carro: carro, isso é possivel apenas com nomes identicos e declarados. 
};

