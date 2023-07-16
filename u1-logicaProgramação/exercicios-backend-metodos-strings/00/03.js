//o método procurar por um texto em uma string e substitui a primeira ocorrência, ele não modifica o orginal. 

const texto = "97.50";

const parte = texto.replace(".", ",");
console.log(parte);

let valor = "1,350,000,000";

while (valor !== valor.replace(",", ".")) {
    valor = valor.replace(",", ".")
}
console.log(valor)