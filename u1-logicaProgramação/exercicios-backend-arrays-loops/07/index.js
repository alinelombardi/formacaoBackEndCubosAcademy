const nomes = ["Ana", "Joana", "Carlos", "amanda"];

const nomesComA = [];

for (let i = 0; i < nomes.length; i++) {
  const nome = nomes[i];
  if (nome.toLowerCase().startsWith('a')) {
    nomesComA.push(nome);
  }
}

console.log(nomesComA);
