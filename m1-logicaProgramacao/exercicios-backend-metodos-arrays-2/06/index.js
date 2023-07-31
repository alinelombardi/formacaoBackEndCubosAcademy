const cidades = [
    "Salvador",
    "São Paulo",
    "Brasilia",
    "Recife",
    "Rio de Janeiro",
]

const verificaCidade = (cidades) => {
    const resultado = cidades.filter((cidade) => {
        return cidade.length <= 8
    });

    return resultado.join(", " , "");
};
const resposta = verificaCidade(cidades);
console.log(resposta);