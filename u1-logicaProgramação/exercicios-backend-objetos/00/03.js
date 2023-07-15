const pessoa = {
    nome: "Aline",
    idade: 37,
    altura: 1.62,
    temCnh: true,
    apelidos: ["Le", "Line", "Loira"]
};

const textoCnh = pessoa.temCnh === true ? "possui": "não possui";

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura, ${textoCnh} CNH e os seguintes apelidos:`);

for(let item of pessoa.apelidos) {
    console.log(`- ${item}`);
};