//every

const frutas = ["Banana", "Abacaxi", "Manga", "Melancia"];
const numeros = [1, 2, 3, 4];

const resultado = frutas.every((elementoAtual) => {
    return elementoAtual !== "goiaba";
});

const numero = numeros.every((numero) => {
    return numero < 5;
})

console.log(resultado);
console.log(numero);