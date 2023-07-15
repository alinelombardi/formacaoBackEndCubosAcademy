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

const jovens = [];
const adultos = [];

function divideUsuarios(usuarios) {
    for(let item of usuarios) {
        if(item.idade < 18) {
            jovens.push(item);
        } else {
            adultos.push(item);
        }
    }
    return {
        jovens, 
        adultos
    };
}

const resposta = divideUsuarios(usuarios);

console.log(resposta);