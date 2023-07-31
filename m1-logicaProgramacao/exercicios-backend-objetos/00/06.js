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

console.log(`Nome do cliente: ${cliente.nome}`);
console.log(`Idade do cliente: ${cliente.idade}`);

cliente.idade = 30;

console.log(`Idade do cliente: ${cliente.idade}`);

let qtdProdutos = produtos.length;

console.log(`Primeiro produto consumido: ${produtos[qtdProdutos - qtdProdutos].nome}`);
console.log(`Primeiro produto consumido: ${produtos[qtdProdutos - 1].precoUnit}`);
