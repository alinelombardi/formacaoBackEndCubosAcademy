function processData(input) {
    const palavra = input.trim().split("");
    let quantidade = 0;
    let palavraCerta = "";

    for (i = 0; i < palavra.length; i++) {
        if (palavra[i] === palavra[i].toUpperCase()) {
            quantidade++
        }
    }
    if (quantidade === 0) {
        palavraCerta = palavra.join("");
    } else if (quantidade === palavra.length) {
        palavraCerta = palavra.join("").toLowerCase();
    } else if ((palavra[0] === palavra[0].toLowerCase()) && (quantidade === palavra.length - 1)) {
        for (i = 0; i < palavra.length; i++) {
            palavra[i] = palavra[i].toLowerCase()
        }
        palavra[0] = palavra[0].toUpperCase()
        palavraCerta = palavra.join("");
    } else {
        palavraCerta = palavra.join("");
    }
    console.log(palavraCerta);
}

processData("cAPS");
processData("lock");
processData("CAPS");
processData("ATENÇÃO");
processData("atenção");
processData("Show");
