// carrossel

function solucao(sequencia) {
    let indice = 0;
    for(let item of sequencia){
        if(item === '>' ){
            indice++;
        } else {
            indice--;
        }
        if(indice <0){
            indice = 6;
        } else if (indice > 6) {
            indice = 0
        }
    }

    return indice
}

const sequencia = ">>><>";
const resposta = solucao(sequencia);
console.log(resposta)