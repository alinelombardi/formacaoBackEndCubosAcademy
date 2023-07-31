const usuarios = [
    {
        nome: "Aline",
        idade: 37
    },
    {
        nome: "Laila",
        idade: 12
    },
    {
        nome: "Yuri",
        idade: 15
    }
]

const ficalizaFesta = (arrayObjetos) => {
    const resultado = arrayObjetos.every((objeto) => {
        return objeto.idade > 17;
    });

    if(resultado) {
        console.log("Festa liberada");
    } else {
        console.log("Possui menor de idade");
    }
}

ficalizaFesta(usuarios);


// const resultado = usuarios.every((elementoAtual) => {
//     return elementoAtual.idade >= 18 ;
// });

// console.log(resultado === true ? "Festa liberada" : "Possui menor de idade");