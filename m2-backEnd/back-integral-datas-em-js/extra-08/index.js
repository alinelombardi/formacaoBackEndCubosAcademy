const { format } = require('date-fns');

// a) Formato: 05 de outubro de 2020
function formatA(date) {
    return format(date, 'dd \'de\' MMMM \'de\' yyyy', { locale: ptBR });
}

// b) Formato: 05/10/2020
function formatB(date) {
    return format(date, 'dd/MM/yyyy');
}

// c) Formato: 5 out
function formatC(date) {
    return format(date, 'd MMM', { locale: ptBR });
}

// d) Formato: 05 out 2020
function formatD(date) {
    return format(date, 'dd MMM yyyy', { locale: ptBR });
}

// e) Formato: 05 de out de 2020
function formatE(date) {
    return format(date, 'dd \'de\' MMM \'de\' yyyy', { locale: ptBR });
}

// f) Formato: 05/out
function formatF(date) {
    return format(date, 'dd/MMM', { locale: ptBR });
}

const ptBR = require('date-fns/locale/pt-BR');

// Exemplo de uso
const minhaData = new Date(2020, 9, 5); // 5 de outubro de 2020

console.log(formatA(minhaData));
console.log(formatB(minhaData));
console.log(formatC(minhaData));
console.log(formatD(minhaData));
console.log(formatE(minhaData));
console.log(formatF(minhaData));