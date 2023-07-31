//some () percorre o array testa a condição estabelecida e retorna true se pelo menos um item corresponder

const nomes = ['joão', 'maria', 'jose', 'rodrigo'];
const numeros = [2, 5, 9, 7];

//desta forma
const minhaFuncao = (nome) => {
    return nome === 'joão';
}
const resultado = nomes.some(minhaFuncao)

// ou desta forma
const resultado2 = nomes.some((nome) => {
    return nome === 'joão';
});

const resultado3 = numeros.some((numero) =>{
    return numero % 2 === 0;
});

console.log(resultado);
console.log(resultado2);
console.log(resultado3);