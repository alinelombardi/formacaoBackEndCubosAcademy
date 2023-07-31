const comentario = "Esse COVID é muito perigoso!";
const bloqueio = "covid";

function bloqueio(frase, bloqueio) {
    const resposta = frase.toLowerCase().includes(bloqueio.toLowerCase());
    if(resposta === true) {
        console.log("Comentário bloqueado por conter palavras proibidas");
    } else {
        console.log("Comentário autorizado");
    }
}

bloqueio(comentario, bloqueio);