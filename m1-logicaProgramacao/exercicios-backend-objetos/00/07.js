function valorPagar(produtos) {
    let soma = 0;

    for(let i = 0; i < produtos.length; i++) {        
        soma += produtos[i].quantidade * produtos[i].precoUnit;
    }
    return soma;
}

const produtos = [
    {
        nome: "Livro concentração",
        precoUnit: 10000,
        quantidade: 1
    },
    {
        nome: "Curso Costelação familiar",
        precoUnit: 100000,
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

const resultado = (valorPagar(produtos))/100;


console.log(`Olá ${cliente.nome}, prazer te receber aqui hoje! O valor total da sua compra é de R$${resultado.toFixed(2)}`)