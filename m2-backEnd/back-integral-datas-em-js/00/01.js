const ontem = new Date('2020-01-01T03:00:00.000Z');
const ontem2 = new Date('2020-01-01T03:00:00.000Z');
const ontem3 = ontem;

console.log(ontem === ontem2) // vai dar falso, pois está comparando pelo mesmo local da memória
console.log(ontem == ontem) // vai dar true
console.log(+ontem === + ontem2); //transforma com o timestamp e compara esse número

const hoje = new Date();
console.log(hoje.getDay())
