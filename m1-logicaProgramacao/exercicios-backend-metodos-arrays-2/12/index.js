const pessoas = [
    {
      nome: "Antonio",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Maria",
      idade: 30,
      profissao: "Jornalista",
    },
    {
      nome: "Ana",
      idade: 21,
      profissao: "Programador",
    },
    {
      nome: "Beatriz",
      idade: 20,
      profissao: "Programador",
    },
    {
      nome: "José",
      idade: 32,
      profissao: "Jornalista",
    },
    {
      nome: "Marcos",
      idade: 30,
      profissao: "Programador",
    },
];

const funcao = ["Jornalista"];
const idade = 29;

const programador = (pessoas, profissao, idade) => {
    const resposta = pessoas.filter((funcao) => {
        return funcao.profissao.includes(profissao)
    });

    const limiteIdade = resposta.filter((idadeLimite) => {
        return idadeLimite.idade > idade;
    })
    return limiteIdade; 
}

const resultado = programador(pessoas, funcao, idade);
console.log(resultado);

