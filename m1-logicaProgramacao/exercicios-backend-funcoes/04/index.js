const contaBancaria = {
    nome: "Maria",
    saldo: 0,
    historicos: [],
    depositar: function (valor) {
        let deposito = "";
        this.saldo += valor.valor;
        this.historicos.push(valor);
        deposito = `${valor.tipo} de R$ ${(valor.valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`;
        return deposito
    },
    sacar: function (valor) {
        let saque = "";
        if (this.saldo < valor.valor) {
            saque = `Saldo insuficiente para o saque de: ${this.nome}.`;
            return saque;
        } else {
            this.saldo -= valor.valor;
            this.historicos.push(valor);
            saque = `${valor.tipo} de R$ ${(valor.valor / 100).toFixed(2)} realizado para o cliente: ${this.nome}`;
            return saque;
        }
    },
    extrato: function () {
        let historico = `Extrato de ${this.nome} - Saldo: R$${(this.saldo / 100).toFixed(2)}\nHistórico:\n`;

        for (let transacao of this.historicos) {
            historico += `${transacao.tipo} de R$ ${(transacao.valor / 100).toFixed(2)}\n`;
        }
        return historico;
    }
}


console.log(contaBancaria.depositar({tipo: "Depósito", valor: 10000}));
console.log(contaBancaria.sacar({tipo: "Saque", valor: 50000}));
console.log(contaBancaria.sacar({tipo: "Saque", valor: 5000}));
console.log(contaBancaria.extrato());