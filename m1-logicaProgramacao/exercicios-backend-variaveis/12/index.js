function taxaJuros (montante, capitalInicial, numMeses) {
    let taxa = Math.pow(montante / capitalInicial, 1 / numMeses) - 1;
    taxa = taxa * 100;
    return taxa;
}

const montante = 90000;
const capitalInicial = 60000;
const numMeses = 24;

const resultado = taxaJuros(montante, capitalInicial, numMeses);

console.log(`O seu financiamento de R$${capitalInicial} reais teve uma taxa de juros de ${resultado.toFixed(3)}%, pois após ${numMeses} meses você teve que pagar ${montante} reais.`)

