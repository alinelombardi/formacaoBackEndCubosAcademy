const cpf = "12345678900";
const cnpj = "123456789000199";

function formatarCPF(cpf) {
    if (cpf.length !== 11) {
      return "CPF Inválido";
    }
  
    const cpfFormatado = cpf.slice(0, 3) + "." + cpf.slice(3, 6) + "." + cpf.slice(6, 9) + "-" + cpf.slice(9);
    return cpfFormatado;
  }
  
  function formatarCNPJ(cnpj) {
    if (cnpj.length !== 14) {
      return "CNPJ Inválido";
    }
  
    const cnpjFormatado = cnpj.slice(0, 2) + "." + cnpj.slice(2, 5) + "." + cnpj.slice(5, 8) + "/" + cnpj.slice(8, 12) + "-" + cnpj.slice(12);
    return cnpjFormatado;
  }
  
  
  console.log(formatarCPF(cpf));
  console.log(formatarCNPJ(cnpj));
  