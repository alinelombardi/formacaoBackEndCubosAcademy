function taAberto(momentoChegada) {
    // Verifica se o dia da semana é sábado (6) ou domingo (0)
    if (momentoChegada.getUTCDay() === 0) {
        return false;
    }

    const horarioAbertura = new Date(momentoChegada);
    const horarioFechamento = new Date(momentoChegada);

    if (momentoChegada.getUTCDay() === 5) { // Se for sexta-feira
        horarioAbertura.setUTCHours(8, 0, 0, 0); // Abre às 8h00 UTC
        horarioFechamento.setUTCHours(18, 0, 0, 0); // Fecha às 18h00 UTC
        horarioFechamento.setUTCMinutes(1); // Considera que fecha às 18h01
    } else if (momentoChegada.getUTCDay() === 6) { // Se for sábado
        horarioAbertura.setUTCHours(8, 0, 0, 0); // Abre às 8h00 UTC
        horarioFechamento.setUTCHours(12, 0, 0, 0); // Fecha às 12h00 UTC
        horarioFechamento.setUTCMinutes(0); // Não precisa considerar os minutos para fechar
    } else { // Demais dias da semana
        horarioAbertura.setUTCHours(8, 0, 0, 0); // Abre às 8h00 UTC
        horarioFechamento.setUTCHours(18, 0, 0, 0); // Fecha às 18h00 UTC
        horarioFechamento.setUTCMinutes(1); // Considera que fecha às 18h01
    }

    return momentoChegada >= horarioAbertura && momentoChegada <= horarioFechamento;
}

console.log(taAberto(new Date(Date.UTC(2021, 3, 25, 12)))); // Deve retornar false, pois é um domingo
console.log(taAberto(new Date(Date.UTC(2021, 3, 26, 12)))); // Deve retornar true, pois é uma segunda
console.log(taAberto(new Date(Date.UTC(2021, 3, 26, 7, 59)))); // Deve retornar false, pois é muito cedo (7h59)
console.log(taAberto(new Date(Date.UTC(2021, 3, 24, 9, 30)))); // Deve retornar true, pois é sábado de manhã (9h30)