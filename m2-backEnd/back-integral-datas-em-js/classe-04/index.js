function taAberto(momentoChegada) {
    if (momentoChegada.getUTCDay() === 6 || momentoChegada.getUTCDay() === 0) {
        return false;
    }

    const horarioAbertura = new Date(momentoChegada);
    horarioAbertura.setUTCHours(8, 0, 0, 0);
    
    const horarioFechamento = new Date(momentoChegada);
    horarioFechamento.setUTCHours(18, 0, 0, 0);
    horarioFechamento.setUTCMinutes(1);

    return momentoChegada >= horarioAbertura && momentoChegada <= horarioFechamento;
}

console.log(taAberto(new Date(Date.UTC(2021, 3, 25, 12))));
console.log(taAberto(new Date(Date.UTC(2021, 3, 26, 12))));
console.log(taAberto(new Date(Date.UTC(2021, 3, 26, 7, 59))));