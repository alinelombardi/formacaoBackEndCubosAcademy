const caractere = "E";

if(caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u") {
    console.log("Vogal minúscula");
} else if(caractere == "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U") {
    console.log("Vogal maiúscula");
} else if (typeof(caractere) === "number") {
    console.log("Números");
} else {
    console.log("Consoante");
}
