const nomes = [
    "Maria",
    "João",
    "José",
    "Antonio",
    "Beatriz",
    "Camila",
    "amanda",
];

const nomesComA = (nomes) => {
    const resposta = nomes.filter((nome) => {
        return nome[0] === "a" || nome[0] === "A" 
    });
    return resposta
};

const resultado = nomesComA(nomes);
console.log(resultado);
