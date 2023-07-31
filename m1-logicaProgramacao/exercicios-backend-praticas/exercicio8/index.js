//Brazilian Storm

function solucao(notas) {

    const indiceMaiorNota = notas.indexOf(Math.max(...notas));
    notas.splice(indiceMaiorNota, 1);

    const indiceMenorNota = notas.indexOf(Math.min(...notas));
    notas.splice(indiceMenorNota, 1);
    
    let soma = 0;

    for (let item of notas) {
        soma += item 
    }

    console.log(soma/notas.length);

}

const notas = [100, 100, 100, 20, 50, 30, 14, 100, 100, 100];
solucao(notas);