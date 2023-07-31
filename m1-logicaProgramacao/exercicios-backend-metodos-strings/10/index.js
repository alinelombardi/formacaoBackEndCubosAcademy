const nomeArquivo = 'Foto da Familia.pdf';

function validaArquivo (nomeArquivo) {
    const localizaExtensao = nomeArquivo.indexOf(".") + 1;
    const qtdCaracteres = nomeArquivo.length;
    const extensao = nomeArquivo.slice(localizaExtensao, qtdCaracteres);

    if(extensao === "jpg" || extensao === "jpeg" || extensao === "gif" || extensao === "png") {
        console.log("Arquivo válido");
    } else {
        console.log("Arquivo Inválido");
    }
}

validaArquivo(nomeArquivo)