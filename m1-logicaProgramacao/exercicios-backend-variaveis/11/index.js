function volumeEsfera(diametro){
    const raio = diametro / 2;
    const esfera = (4 / 3) * Math.pow(raio, 3);
    return esfera;
}

const diametro = 6;
const resultado = volumeEsfera(diametro);

console.log(`O volume de uma esfera de raio 3 é ${resultado} PI`);