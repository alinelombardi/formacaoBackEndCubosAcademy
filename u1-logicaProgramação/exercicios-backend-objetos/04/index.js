const usuarios = [
    {
        nome: "João",
        idade: 25,
    },
    {
        nome: "Ana",
        idade: 18,
    },
    {
        nome: "Beatriz",
        idade: 15,
    },
    {
        nome: "Carlos",
        idade: 16,
    },
    {
        nome: "Antonio",
        idade: 32,
    },
];

function maiorIdade(usuarios) {
    for (let i = 0; i < usuarios.length; i++) {
        const usuario = usuarios[i];
        usuario.maior_idade = usuario.idade > 17;
    }
    return usuarios;
}

console.log(maiorIdade(usuarios));

// usuarios.forEach((usuario) => {
//     usuario.maior_idade = usuario.idade > 17;
// });

// console.log(usuarios);