const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

const idadeMinima = 12;
const idadeMaxima = 65;
const alturaMinima = 150;

if(idade < idadeMinima || idade > idadeMaxima || possuiPatologia == true || altura < alturaMinima){
    console.log("ACESSO NEGADO");
} else if (ehEstudante == true || idade < 18){
    console.log("10 reais");
} else {
    console.log("20 reais");
}

