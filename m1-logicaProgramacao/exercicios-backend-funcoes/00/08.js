const pessoa = {
    nome: "Aline",
    idade: 37,
    profissao: "desenvolvedora",
    altura: 1.62,
    apresentar: function () {// método, é uma função dentro de um objeto, neste caso ainda uma função anônima
        const resposta = this.faixaEtaria(this.idade); // quando estamos usando dentro do objeto, usamos a palavra this, que vai remeter ao objeto que está chamando
        console.log(`Olá meu nome é ${this.nome}, sou um (a) ${resposta} de ${this.idade} anos, ${this.altura} de altura e sou ${this.profissao}`)

    },
    faixaEtaria: function () {
        if (this.idade <= 21) {
            return "jovem";
        } else if (this.idade <= 65) {
            return "adulto (a)";
        } else {
            return "idoso (a)";
        }
    }
};

pessoa.apresentar(); //chamamos como qualquer outra propriedade do objeto. 

// function faixaEtaria(idade) {
//     if (idade <= 21) {
//         return "jovem";
//     } else if (idade <= 65) {
//         return "adulto (a)";
//     } else {
//         return "idoso (a)";
//     }
// }

// function imprime(pessoa) {
//     const resposta = faixaEtaria(pessoa.idade);
//     console.log(`Olá meu nome é ${pessoa.nome}, sou um (a) ${resposta} de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}`)
// }

// imprime(pessoa)