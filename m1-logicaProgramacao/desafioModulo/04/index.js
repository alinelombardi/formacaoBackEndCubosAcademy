function solucao(min, max, valores) {
    const permitidos = [];
    for (let item of valores) {
        if (item >= min && item <= max) {
            permitidos.push(item);
        }
    }
    console.log(permitidos)
}

const valores = [0, 5, 6, 10, 11]
const minimo = 2;
const maximo = 10;

solucao(minimo, maximo, valores)