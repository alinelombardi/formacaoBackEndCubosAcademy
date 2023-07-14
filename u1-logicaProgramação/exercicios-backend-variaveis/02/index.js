function retornaCelsius(temperatura) {
    const celsius = (temperatura - 32) * (5 / 9);
    return celsius;
}

const temperatura = 55;
const celsius = retornaCelsius(temperatura);

console.log(`O valor em Celsius é: ${celsius.toFixed(2)}`);