function inverter(array) {
    array.reverse();
    const resposta = array.join(" ");
    console.log(resposta)

}

const frutas = ['Banana', 'Maçã', 'Abacaxi', 'Pêra', 'Uva'];
const texto = "Melão"
inverter(frutas)


function retiraItens(array, texto) {
    (array.reverse()).shift();
    array.pop();
    array.push(texto);
    console.log(array);
    
}

retiraItens(frutas, texto)