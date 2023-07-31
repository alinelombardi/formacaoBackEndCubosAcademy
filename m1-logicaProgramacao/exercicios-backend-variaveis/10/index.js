function calculaDelta(a, b, c) {
    const delta = Math.pow(b, 2) - (4 * a * c);
    return delta;
}

const a = 5;
const b = 5;
const c = 1; 

const resultado = calculaDelta(a, b, c)

console.log(`O valor de delta é ${resultado}`)
