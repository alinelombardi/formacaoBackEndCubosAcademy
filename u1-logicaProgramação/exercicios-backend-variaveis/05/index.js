function calculoDistancia(x1, x2, y1, y2) {
    const d = Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
    return d;
}

const x1 = 1;
const x2 = 1;
const y1 = 1;
const y2 = 4;

const resultado = calculoDistancia(x1, x2, y1, y2);

console.log(resultado);
