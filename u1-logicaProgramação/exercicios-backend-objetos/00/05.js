const produtos = [
    {
        nome: "Livro concentração",
        precoUnit: 10000,
        quantidade: 1
    },
    {
        nome: "Curso Costelação familiar",
        precoUnit: 1000000,
        quantidade: 1
    },
    {
        nome: "Cadernos",
        precoUnit: 1000,
        quantidade: 8
    }   
];
     

const cliente = {
    nome: "Aline", 
    idade: 37
};

console.log(`Olá ${cliente.nome}, em comemoração aos seus ${cliente.idade} anos, você tem descontos nos produtos: `);

for(let item of produtos) {
    console.log(`- ${item.nome}`)
};