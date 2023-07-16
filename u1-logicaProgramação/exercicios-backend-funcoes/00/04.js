function verificarIdade (idade) {
    if(idade >= 18) {
        return true
    } else {
        return false
    }
}

const resposta = verificarIdade(20);
console.log(resposta === true ? "É maior de idade" : "Não é maior de idade")