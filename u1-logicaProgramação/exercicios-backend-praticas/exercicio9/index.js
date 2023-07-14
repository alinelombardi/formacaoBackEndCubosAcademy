//Forca

function solucao(palpite, palavra) {
    let letras = 0;
    for(let item of palavra){
        const primeiraLetra = item[0];
        if(primeiraLetra === palpite){
            letras++;
        } 
    }
    console.log(letras);

}

const palpite = "a";
const palavra = "abelhaaaa";
solucao(palpite, palavra);