let identificador = "123";
let nome = "José silva costa";
let email = "      jose@email.com  ";

function ajustaIdentificador(numero) {
    const identificador = numero.padStart(6, 0);
    console.log(identificador);
}

function ajustaNome(nome){
    const arrayNome = nome.split(" ");
    let nomeF = "";
    for(let item of arrayNome){
        let primeiraLetra = item.slice(0, 1);
        let restante = item.slice(1)
        nomeF += primeiraLetra.toUpperCase() + restante + " ";
    }
    console.log(nomeF)
}

function ajustaEmail(email) {
    const emailCerto = email.trim();
    console.log(emailCerto)
}

ajustaIdentificador(identificador);
ajustaNome(nome);
ajustaEmail(email)


