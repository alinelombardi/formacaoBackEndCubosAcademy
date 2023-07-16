const cpf = "011.022.033-44";

function removerPontuacao(cpfOuCnpj) {
    const numeros = cpfOuCnpj.replace(/\D/g, '');
    console.log(numeros);
  }
  
  removerPontuacao(cpf);
  
  const cnpj = "01.123.456/0001-99";
  removerPontuacao(cnpj);
  