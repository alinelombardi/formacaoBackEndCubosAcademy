function calculoJuros(capital, taxaJuros, periodoTempo) {
    taxaJuros = taxaJuros / 100;
    const montante = capital * Math.pow(1+taxaJuros, periodoTempo);
    return montante;
}

const capital = 1000;
const taxaJuros = 12.5;
const periodoTempo = 5;

const resultado = calculoJuros(capital, taxaJuros, periodoTempo);

console.log(`O valor do montante é: R$ ${resultado.toFixed(2)}`);
