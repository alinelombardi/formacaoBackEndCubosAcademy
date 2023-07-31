const rendaMensalEmCentavos = 150000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

/* 
Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). 
Se for igual a 18 mil reais, o aluno não deve pagar mais nada,
pois já quitou a dívida.
*/
const totalJaPagoPeloAluno = 100000;

const mesesPrazo = 60;
const valorCurso = 1800000;
const porcentagemPagar = 0.18;
const rendaMinima = 200000;

if(mesesDecorridos > mesesPrazo || totalJaPagoPeloAluno >= valorCurso) {
    console.log(`O prazo decorrido de contrato é maior que ${mesesPrazo} meses e/ou atingiu o valor do curso de R$${valorCurso/100} e você não precisa pagar mais nenhuma parcela!`);
} else if (rendaMensalEmCentavos < rendaMinima) {
    console.log("O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.");
} else {
    const valorParcela = (rendaMensalEmCentavos * porcentagemPagar) / 100;
    if(valorParcela <= 0) {
        console.log(`O valor da parcela desse mês é R$ 0 reais. Nenhum valor é devido pois a renda do estudante está abaixo do valor mínimo de R$ 2000 reais.`);
    } else {
        console.log(`O valor da parcela desse mês é R$ ${valorParcela} reais`)
    }    
}