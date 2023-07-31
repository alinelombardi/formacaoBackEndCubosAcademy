const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const maiorCidade = cidades.reduce((acumulador, elementoAtual) => {
    let nome = acumulador;
    if(elementoAtual.length > nome.length) {
        nome = elementoAtual;
    }
    return nome;
});

console.log(maiorCidade);

