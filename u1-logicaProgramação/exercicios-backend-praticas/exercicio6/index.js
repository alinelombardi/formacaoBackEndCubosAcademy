//Brasil com p 

function solucao(palavras, primeiraLetra, segundaLetra) {
  let palavrasEncontradas = [];

  for (let palavra of palavras) {
    const letraUm = palavra[0];
    const letraDois = palavra[1];
    if (letraUm === primeiraLetra && letraDois === segundaLetra) {
      palavrasEncontradas.push(palavra);
    }
  }

  if (palavrasEncontradas.length === 0) {
    console.log("NENHUMA");
  } else {
    for (let palavraEncontrada of palavrasEncontradas) {
      console.log(palavraEncontrada);
    }
  }
}

const palavras = ["aveia", "manha", "ave"];
const primeiraLetra = "a";
const segundaLetra = "v";

solucao(palavras, primeiraLetra, segundaLetra);