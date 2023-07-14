function calculoCovid(po, x, t) {
  const infectados = po * Math.pow(x, t / 7);
  return infectados;
}

const po = 1000;
const x = 4;
const t = 100;

const resultado = calculoCovid(po, x, t)

console.log(`O total de pessoas infectadas será de ${resultado}, após ${t} dias, uma vez que inicialmente existiam ${po} pessoas infectadas`)
