//Forca

function solucao(resultados) {
    let vitorias = 0;
    let empates = 0;
    let perdas = 0;
    let totalPontos = 0;

    for (let item of resultados) {
        if (item === "V") {
            vitorias++;
        } else if (item === "E") {
            empates++;
        } else {
            perdas++
        }
    }

    totalPontos = (vitorias * 3) + (empates * 1) + (perdas * 0);
    console.log(totalPontos)
}

const resultados = ["V", "D","E", "V", "E"];
solucao(resultados);