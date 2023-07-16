
const pessoa = {
    nome: "Aline",
    idade: 37,
    profissao: "desenvolvedora",
    altura: 1.62,
};

function faixaEtaria(idade) {
    if(idade <= 21){
        return "jovem";
    } else if (idade <=65) {
        return "adulto (a)";
    } else {
        return "idoso (a)";
    }
}

function imprime(pessoa) {
    const resposta = faixaEtaria(pessoa.idade);
    console.log(`Olá meu nome é ${pessoa.nome}, sou um (a) ${resposta} de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}`)
}

imprime(pessoa)