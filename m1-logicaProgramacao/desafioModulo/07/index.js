function solucao(texto) {
    const resposta = texto.trim().split(" ");
    let quantidade = 0;

    for (i = 0; i < resposta.length; i++) {
        if (resposta[i] !== "") {
            quantidade = quantidade + 1
        }
    }
    console.log(quantidade)
}


const texto = "Cuidado , pois usuarios 22 as vezes deixam espacos vazios no fim do texto sem querer ";
const texto2 = "Um texto qualquer";

solucao(texto)
