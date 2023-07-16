
const pessoa = {
    //membro ou propriedade do objeto, são as variáveis que ficam dentro do objeto e as informações são relacionadas ao objeto
    nome: "Aline",
    idade: 37,
    profissao: "desenvolvedora",
    altura: 1.62,
};

function imprime(pessoa) {
    console.log(`Olá meu nome é ${pessoa.nome}, sou uma jovem de ${pessoa.idade} anos, ${pessoa.altura} de altura e sou ${pessoa.profissao}`)
}

imprime(pessoa)