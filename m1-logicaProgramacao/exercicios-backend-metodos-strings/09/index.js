const nome = 'Guido Cerqueira';

function gerarNickname(nome) {
    const nomeSemEspacos = nome.replace(" ", "");
    const nomeLowerCase = nomeSemEspacos.toLowerCase();
    const tamanhoMaximo = Math.min(nomeLowerCase.length, 12);
    const nickname = `@${nomeLowerCase.slice(0, tamanhoMaximo)}`;
    console.log(nickname)
  }
  
  gerarNickname(nome);
  

  gerarNickname('John Doe'); 
  gerarNickname('Jane Smith');
  gerarNickname('Alice');
  
  