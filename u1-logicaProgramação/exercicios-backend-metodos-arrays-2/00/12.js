// map()

const numeros = [1, 2, 3];

const dobro = numeros.map((numero) => {
    return numero * 2;
});

console.log(dobro);

const usuarios = [
    { nome: "Aline", sobrenome: "Lombardi", idade: 31 },
    { nome: "Laila", sobrenome: "Lombardi", idade: 12 },
    { nome: "Yuri", sobrenome: "Lombardi", idade: 15 }
]

const nomeCompleto = usuarios.map((usuario) => {
    return { nomeCompleto: `${usuario.nome} ${usuario.sobrenome}, idade: ${usuario.idade}`};
});

console.log(nomeCompleto);