function faixaEtaria(idade) {
    if(idade <= 21){
        return "Jovem";
    } else if (idade <=65) {
        return "Adulto";
    } else {
        return "Idoso";
    }
}

const resposta = faixaEtaria(25);
console.log(resposta);