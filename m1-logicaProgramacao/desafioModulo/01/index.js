const numeros = [1, 2, 3 , 4];

function solucao(lista) {
    let soma = 0;
    for (let item of lista) {
        soma += item;
    }
    console.log(soma);
}

solucao(numeros);