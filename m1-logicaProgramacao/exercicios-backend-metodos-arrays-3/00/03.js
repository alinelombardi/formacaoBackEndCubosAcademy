const usuarios = [
    { id: 11, nome: 'joão', idade: 23 },
    { id: 2, nome: 'maria', idade: 18 },
    { id: 4, nome: 'ana', idade: 30 },
    { id: 1, nome: 'rodrigo', idade: 17 },
    { id: 123, nome: 'rodrigo', idade: 17 }
];


usuarios.sort((x, y) => {
    return x.id - y.id;
})
console.log(usuarios);


usuarios.sort((x, y) => {
    return y.id - x.id;
});
console.log(usuarios);