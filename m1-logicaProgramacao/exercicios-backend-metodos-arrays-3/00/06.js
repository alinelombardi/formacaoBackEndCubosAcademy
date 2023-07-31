const pessoas = ['João', 'ana', 'Carlos', 'Beatriz'];
pessoas.sort((a, b) => {
    return a.localeCompare(b);
});

console.log(pessoas); // [ 'ana', 'Beatriz', 'Carlos', 'João' ]

const frutas = ["Banana", "Amora", "abacaxi", "uva", "Pera"]
frutas.sort((a, b) => {
    return b.localeCompare(a);
});

console.log(frutas); // [ 'uva', 'Pera', 'Banana', 'Amora', 'abacaxi' ]