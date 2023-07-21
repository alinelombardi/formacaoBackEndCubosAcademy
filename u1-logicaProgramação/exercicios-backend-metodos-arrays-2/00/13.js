const produtos = [
    { nome: "arroz", preco: 500 },
    { nome: "carne", preco: 3200 },
    { nome: "biscoito", preco: 450 },
    { nome: "banana", preco: 320 }
]


const produtosDesconto = produtos.map((produto) => {
    const valorDesconto = produto.preco * 0.10;
    return { nome: `${produto.nome}, preco: ${produto.preco}, valorDesconto: ${valorDesconto}`};
});

console.log(produtosDesconto);
