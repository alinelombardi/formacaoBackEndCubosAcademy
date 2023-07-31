//purificação

function solucao(stringCorrompida) {
    let dado = "";
    for(let letras of stringCorrompida){
        if(letras === "!" || letras === "@" || letras === "#" || letras === "$" || letras === "%" || letras === "&" || letras === "*" || letras === "(" || letras === ")" || letras === "." ) {

        } else {
            dado += letras
        }
    }
    return dado;
}

const stringCorrompida = "*Canis %lupues )familiaris";
const resposta = solucao(stringCorrompida);
console.log(resposta);

//!@#$%&*()