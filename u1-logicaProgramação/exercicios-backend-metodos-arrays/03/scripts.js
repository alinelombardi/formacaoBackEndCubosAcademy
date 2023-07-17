const nomes = ['Ford Ká', 'Ranger', 'Hilux', 'Corola', 'Fusca', 'Chevete', 'Brasilia'];
const posicao = 3;

function retornaCarros(arrayCarros, numero) {
    const resposta = (arrayCarros.slice(numero, numero+3)).join(" - ");
    console.log(resposta);
}

retornaCarros(nomes, posicao);