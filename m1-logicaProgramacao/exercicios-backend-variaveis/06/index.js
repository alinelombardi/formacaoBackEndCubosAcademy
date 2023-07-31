function calculoVelocidade(distPercorrida, tempo) {
  const distanciaKm = distPercorrida / tempo;
  distanciaKm = distanciaKm * 3.6;
  return distanciaKm;
}

const distPercorrida = 500;
const tempo = 10;

const resultado = calculoVelocidade(distPercorrida, tempo)

console.log(`A velocidade média é de ${resultado} km/h`)
