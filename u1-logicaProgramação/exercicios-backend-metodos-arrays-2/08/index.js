const frutas = ["Manga", "UVA", "abacaxi", "banaNA", "MAçã"];

const alteraFrutas = (frutas) => {
    const novoArray = frutas.map((fruta, indice) => {
        const primeiraLetra = fruta[0].toUpperCase();
        const restoDaPalavra = fruta.substring(1).toLowerCase();
        return `${indice} - ${primeiraLetra}${restoDaPalavra}`;
    });

    return novoArray;
};

const resposta = alteraFrutas(frutas);
console.log(resposta);