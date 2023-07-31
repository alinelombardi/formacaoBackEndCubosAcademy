//50 centavos por minuto de viagem 
//70 centavos por cada quilômtro de viagem realizado
//mais de 10km, cada km adicional (acima de 10) fica mais barato, apenas 50 centavos por km. 
//mais de 20min, cada min adicional (acima de 20) fica mais barato, apenas 30 cetavos por minuto


function solucao(min, km) {
    let excendenteMinutos = 0;
    let excedenteKm = 0;
    let valorKm = 0;
    let valorMinuto = 0;
    let valorTotal = 0;

    if(min > 20) {
        excendenteMinutos = min - 20;
    } else {
        excendenteMinutos = 0;
    }

    if(km > 10) {
        excedenteKm = km - 10;
    } else {
        excedenteKm = 0;
    }

    if(excedenteKm > 0) {
        valorKm = (excedenteKm * 50) + (10 * 70);
    } else {
        valorKm = km * 70;
    }

    if(excendenteMinutos > 0) {
        valorMinuto = (excendenteMinutos * 30) + (20 * 50);
    } else {
        valorMinuto = min * 50;
    }

    valorTotal = valorKm + valorMinuto;
    console.log(valorTotal);
}

const min = 25;
const km = 11.5;

solucao(min, km);


