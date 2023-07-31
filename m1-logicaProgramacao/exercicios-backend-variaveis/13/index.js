function areaTotal(raio, altura) {
    const areaTotal = 2 * raio * (raio + altura);
    return areaTotal;
}

raio = 3
altura = 1

const resultado = areaTotal(raio, altura);

console.log(`A área total do cilindro a partir do raio da sua base e da sua altura é ${resultado}pi`)