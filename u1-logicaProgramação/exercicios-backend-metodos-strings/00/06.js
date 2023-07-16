//Preenche uma string colocando text no início dela (várias vezes, se necessário) até que a string atinja o tamanho lenght

const ultimos4dig = "2345";
const numCartao = ultimos4dig.padStart(19, "****");
console.log(numCartao)

function data (dia, mes, ano) {
    let diaF = String(dia).padStart(2, "0");
    let mesF = String(mes).padStart(2, "0");
    let anoF = `${ano}`.padStart(4, "0"); // outra forma de transformar em string

    console.log(`A data é ${diaF}/${mesF}/${anoF}`)

}


data(1, 1, 2021)