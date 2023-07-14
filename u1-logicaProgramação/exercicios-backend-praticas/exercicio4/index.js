//abecedário

function solucao(letra, palavras){
    let erros = 0;
    for(let item of palavras){
        const primeiraLetra = item[0];
        if(primeiraLetra !== letra){
            erros++
        } 
    }
    return erros;
}

const letra = "m";
const palavras = ["mamao", "maca", "melao", "melancia", "laranja"]

const resposta = solucao(letra, palavras);
console.log(resposta)