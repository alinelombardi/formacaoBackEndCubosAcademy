const enderecos = [
    { cep: 77111222, rua: "Rua dos Artistas" },
    { cep: 88111333, rua: "Rua Augusta" },
    { cep: 11222444, rua: "Avenida Paralela" },
    { cep: 11222333, rua: "Rua Carlos Gomes" },
];

const cep = 11222444;

const nomeRua = (enderecos, cep) => {
    const resultado = enderecos.find((rua) => {
        return rua.cep === cep 
    });

    return resultado.rua;
};

const resposta = nomeRua(enderecos, cep);
console.log(resposta);