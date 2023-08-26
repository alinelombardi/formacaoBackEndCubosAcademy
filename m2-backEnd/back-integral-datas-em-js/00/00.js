//criando um momento

const agora = new Date();
console.log(agora);

const date = Date(); // retorna data apenas em string (Fri Aug 25 2023 13:26:08 GMT-0300 (Horário Padrão de Brasília)
console.log(date);

const dataAnoNovo = new Date(2020, 0); // meses começam com 0, Janeiro 0, Fevereiro 1 e assim por diante, isso é apenas para os meses
console.log(dataAnoNovo);


const dataCopa = new Date(2002, 5, 30, 8)
console.log(dataCopa) // 2002-06-30T11:00:00.000Z

//quantos milissegundos passaram desde o 01/01/1970 00:00:00
//o timestamp é igual em todos os fusos, porque ele representa o tempo que passou de uma data a outra

console.log(+dataCopa) // 1025434800000

const timestamp = +dataCopa + 1000*60*60 // somando uma hora ai momento acima, pegamos a quantidade de milissegundos em 1 segundo, multiplicamos por 60 segundos que tem um minuto e 60 minutos que tem uma hora. 
console.log(`Teste do timestamp ${timestamp}`)

//criar uma data a partir do timestamp
const hora = new Date(timestamp);
console.log(hora)
console.log(`Teste da hora ${hora}`)

const tempoPrimeiroGol = +dataCopa + (1000*60*60) + 1000*60*22;
const tempoSegundoGol = +dataCopa + (1000*60*60) + 1000*60*34;

// const tempoPrimeiroGol = +dataCopa + (45 + 15 + 22) * 1000;
// const tempoSegundoGol = +dataCopa + (45 + 15 + 38) * 1000;

const primeiroGol = new Date(tempoPrimeiroGol);
const segundoGol = new Date(tempoSegundoGol);

console.log(`Primeiro gol ${primeiroGol}`);
console.log(`Segundo gol ${segundoGol}`);


//não façam isso em casa!

// é possível criar datas com string

const ontem = new Date('2023-08-25T17:40:48.243Z');
console.log(ontem)