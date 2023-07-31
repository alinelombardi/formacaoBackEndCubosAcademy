//Tiro ao Alvo

function solucao(disparos) {

    let quantidadeAcertos = 0;

    for (let i = 0; i < disparos.length; i++) {
        if (disparos[i] > 70) {
            quantidadeAcertos++;
        }
    }
    if (quantidadeAcertos >=3 ) {
        console.log(quantidadeAcertos)
    } else {
        console.log("ELIMINADO")
    }
}

const disparos = [0, 50, 90, 80, 100, 80, 40];
solucao(disparos);