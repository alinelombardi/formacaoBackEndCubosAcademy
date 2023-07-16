const carrinho = {
    nomeDoCliente: "Guido Bernal",
    produtos: [
        {
            id: 1,
            nome: "Camisa",
            qtd: 3,
            precoUnit: 3000
        },
        {
            id: 2,
            nome: "Bermuda",
            qtd: 2,
            precoUnit: 5000
        }
    ],
    imprimirResumo: function () {
        console.log(`Cliente: ${this.nomeDoCliente}\n\n${this.imprimirDetalhes()}\nTotal de itens: ${this.calcularTotalDeItens()}\nTotal a pagar: R$ ${(this.calcularTotalAPagar() - this.calcularDesconto()).toFixed(2)}\nVocê ganhou R$ ${this.calcularDesconto().toFixed(2)} de desconto`)
    },
    addProduto : function (produto) {
        let produtoExistente = false;
  
        for (const item of this.produtos) {
          if (item.id === produto.id) {
            item.qtd += produto.qtd;
            produtoExistente = true;
            break;
          }
        }
      
        if (!produtoExistente) {
          this.produtos.push(produto);
        }        
    },
    imprimirDetalhes: function () {
        let retorno = "";
        for(let item of this.produtos) {            
            retorno += (`Item ${item.id} - ${item.nome} - ${item.qtd} und - R$ ${(item.precoUnit/100).toFixed(2)}\n`); 
        }
        return retorno
    },
    calcularTotalDeItens: function () {
        let itens = 0;
        for (let item of this.produtos) {
            itens += item.qtd;
        }
        return itens;
    },
    calcularTotalAPagar: function () {
        let somaProdutos = 0;
        for (let item of this.produtos) {
            somaProdutos += (item.qtd * item.precoUnit) / 100;
        }
        return somaProdutos;
    },
    calcularDesconto: function () {
        const totalItens = this.calcularTotalDeItens();
        const totalGasto = this.calcularTotalAPagar()*100;
        let valorDescontoItens = 9999999999999;
        let valorDescontoGastos = 0;
        let desconto = 0;

        if(totalItens > 4) {
            for(let itens of this.produtos) {
                if(valorDescontoItens > itens.precoUnit) {
                    valorDescontoItens = itens.precoUnit;
                } else {
                    valorDescontoItens;
                }
            }
        } 
        
        if(totalGasto > 100) {
            valorDescontoGastos = totalGasto * 0.10;
        }

        desconto = valorDescontoGastos > valorDescontoItens ? valorDescontoGastos/100 : valorDescontoItens/100;

        return desconto
    }
}

const novaBermuda = {
    id: 2,
    nome: "Bermuda",
    qtd: 3,
    precoUnit: 5000
}

const novoTenis = {
    id: 3,
    nome: "Tenis",
    qtd: 1,
    precoUnit: 10000
}

// carrinho.addProduto(novaBermuda);
// carrinho.addProduto(novoTenis);

carrinho.imprimirResumo()