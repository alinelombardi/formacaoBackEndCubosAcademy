const palavras = ["livro", "caneta", "sol", "carro", "orelha"]

const palavrasValidas = (palavras) => {
    const verificaPalavra = palavras.some((palavra) => {
        return palavra.length > 5
    });
    if(verificaPalavra === true) {
        return "existe palavra inválida"
    } else {
        return "array validado."
    }
} 

const resposta = palavrasValidas(palavras);
console.log(resposta);


