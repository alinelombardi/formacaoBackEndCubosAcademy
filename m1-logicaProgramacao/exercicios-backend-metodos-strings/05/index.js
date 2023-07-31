const numeroCartao = '1111222233334444';

function ajustaNumeroCartao (numeroCartao) {
    if (numeroCartao.length !== 16) {
        console.log("Número de cartão inválido");
      }

      const digitosVisiveis = numeroCartao.slice(0, 4);
      const digitosOcultos = "********";
      const digitosFinais = numeroCartao.slice(-4);
    
      console.log(digitosVisiveis + digitosOcultos + digitosFinais);
}

ajustaNumeroCartao(numeroCartao)

  