const text = "Cubos Academy";
console.log(text.length); // retorna quantidade de caracteres da string

console.log(text.includes("Cubos")) // busca a string  dentro dos () e retorna true ou false

console.log(text.indexOf("Cubos")) // retorna a posição onde está a string procurada e quando não localizada retorna -1

const email = "alinelf86@gmail.com";
const posicao = email.indexOf("@")
console.log(posicao)

console.log(email.includes(".", posicao))