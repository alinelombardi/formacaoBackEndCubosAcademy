const palavras = ["arroz", "feijão", "carne", "cerveja", "macarrão"]

const verificaLista = (lista) => {
    const proibido = lista.some((item) => {
        return item === "cerveja" || item == "vodka";
    });
    if (proibido) {
        return "revise sua lista, joão. possui bebida com venda proibida!";
    } else {
        return "tudo certo, vamos as compras!"; 
    }
};

const resposta = verificaLista(palavras);
console.log(resposta);