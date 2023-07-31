const numeros = [2, 3, 4];

function solucao(lista) {
    let soma = 0;
    let qtdNumeros = lista.length;
    for (let item of lista) {
        soma += item;
    }

    const resultado = soma / qtdNumeros;
    console.log(resultado);
}

solucao(numeros);