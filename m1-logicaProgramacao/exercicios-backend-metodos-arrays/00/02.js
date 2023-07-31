function inverterString (string) {
    const arrayLetras = string.split("");
    arrayLetras.reverse();

    let textoInvertido = "";
    for(let letra of arrayLetras){
        textoInvertido += letra;
    }
    console.log(textoInvertido);
};


const array = "Cubos Academy"

inverterString(array)