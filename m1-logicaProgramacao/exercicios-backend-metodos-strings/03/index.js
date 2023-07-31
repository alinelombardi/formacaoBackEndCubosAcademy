const texto = "Aprenda programar do zero na Cubos Academy";

function formataUrl (texto) {
    let url = texto.toLowerCase();
    while(url !== url.replace(" ", "-")) {
        url = url.replace(" ", "-");
    }    
    console.log(url)
}

formataUrl(texto)