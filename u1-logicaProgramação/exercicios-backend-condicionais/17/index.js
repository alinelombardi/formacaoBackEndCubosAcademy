//valor do produto comprado.
const valorDoProduto = 100000;

//quantidade de parcelas
const quantidadeDoParcelamento = 10;

//valor pago
const valorPago = 300;

const valorParcela = (valorDoProduto / quantidadeDoParcelamento) / 100;
const parcelasPagas = valorPago / valorParcela;

console.log(`Restam ${quantidadeDoParcelamento - parcelasPagas} parcelas de R$${valorParcela}`)