function calculaDesconto(valorProduto, valorParaComprar) {
    const valorFaltante = valorProduto - valorParaComprar;
    const porcentagemDesconto = (valorFaltante * 100) / valorProduto;
    return porcentagemDesconto;
}

const valorProduto = 129.99;
const valorParaComprar = 80.00;

const valorDesconto = calculaDesconto(valorProduto, valorParaComprar);

console.log(`O cupom deve ter: ${Math.round(valorDesconto)}% de desconto`);