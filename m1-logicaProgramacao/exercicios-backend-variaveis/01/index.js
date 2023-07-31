function calcularIMC(peso, altura) {
    const imc = peso / (altura ** 2);
    return imc;
}

const peso = 55;
const altura = 1.62;

const resultadoIMC = calcularIMC(peso, altura);

console.log(`O IMC é: ${resultadoIMC.toFixed(2)}`);