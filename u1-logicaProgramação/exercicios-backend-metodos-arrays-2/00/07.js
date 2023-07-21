//find() procura no array a informação da função e retorno a informação buscada, em casos de objetos, vai retornar o objeto inteiro

const usuarios = [
    { nome: 'joao', idade: 23 },
    { nome: 'maria', idade: 18 },
    { nome: 'ana', idade: 30 },
    { nome: 'rodrigo', idade: 17 }
];

const nomes = ['laila', 'yuri', 'aline'];

const resultado = usuarios.find((usuario) => {
    return usuario.nome === 'joao';
})

console.log(resultado)

const resultado2 = nomes.find((nome) => {
    return nome === 'laila';
})

console.log(resultado2)

const numeros = [37, 15, 12];

const resultado3 = numeros.find((numero) => {
    return numero === 11
}) 

console.log(resultado3)