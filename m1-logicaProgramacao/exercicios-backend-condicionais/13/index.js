//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "credito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;

if(tipoDePagamento === "credito") {
    const valorPagar = valorDoProduto / 100 - (valorDoProduto / 100 * 0.05);
    console.log(`Valor a ser pago: R$${valorPagar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
} else if(tipoDePagamento === "cheque"){
    const valorPagar = valorDoProduto / 100 - (valorDoProduto / 100 * 0.03);
    console.log(`Valor a ser pago: R$${valorPagar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
} else if(tipoDePagamento === "debito" || tipoDePagamento === "dinheiro") {
    const valorPagar = valorDoProduto / 100 - (valorDoProduto / 100 * 0.10);
    console.log(`Valor a ser pago: R$${valorPagar.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}`);
} else {
    console.log("Verfique a forma de pagamento")
}

