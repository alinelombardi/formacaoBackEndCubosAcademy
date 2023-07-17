const nomes = ['Juninho', 'Vidal', 'Guido', 'Dani', 'Ruli', 'Diego'];
const tamanhoDoGrupo = 4;

function dividirGrupos(nomes, tamanhoDoGrupo) {
    let grupoAtual = 1;
    let indiceInicial = 0;
    let indiceFinal = tamanhoDoGrupo;
  
    while (indiceInicial < nomes.length) {
      const grupo = nomes.slice(indiceInicial, indiceFinal);
      console.log(`Grupo ${grupoAtual}: ${grupo.join(', ')}`);
  
      grupoAtual++;
      indiceInicial = indiceFinal;
      indiceFinal = indiceFinal + tamanhoDoGrupo;
    }
  }
  
  dividirGrupos(nomes, tamanhoDoGrupo);
  