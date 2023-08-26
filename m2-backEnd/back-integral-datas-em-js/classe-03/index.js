function taAberto(momentoChegada) {
    const horarioAbertura = new Date(momentoChegada);
    horarioAbertura.setUTCHours(8, 0, 0, 0); // Define a hora de abertura para 8h00 UTC

    const horarioFechamento = new Date(momentoChegada);
    horarioFechamento.setUTCHours(18, 0, 0, 0); // Define a hora de fechamento para 18h00 UTC
    horarioFechamento.setUTCMinutes(1); // Considera que fecha às 18h01

    return momentoChegada >= horarioAbertura && momentoChegada <= horarioFechamento;
}

console.log(taAberto(new Date(Date.UTC(2015, 1, 1, 12))));
console.log(taAberto(new Date(Date.UTC(2015, 1, 1, 2))));