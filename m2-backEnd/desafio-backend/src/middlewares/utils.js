function verificarConta(numero_conta, contas) {
    return contas.find((item) => {
        return item.numero_conta === Number(numero_conta);
    });
};

module.exports = verificarConta;