function solucao(precos) {
    const quantidadeProdutos = precos.length;
    let valorCompra = 0;
    let menorValor = 99999999999;
    for(let item of precos) {
        valorCompra +=item;
        if(item < menorValor) {
            menorValor = item;
        } else {
            menorValor;
        }
    }

    if (quantidadeProdutos >= 3) {
        valorCompra = valorCompra - (menorValor * 0.50);
        console.log(valorCompra);
    } else {
        console.log(valorCompra);
    }
}


const precos = [200, 150, 50, 100]

solucao(precos)