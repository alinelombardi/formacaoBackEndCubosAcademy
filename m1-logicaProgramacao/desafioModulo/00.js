// como manipular o input de entrada

const input = "3\n0 0\n0 3\n4 0"

const linhas = input.trim().split("\n");
const n = parseInt(linhas[0], 10);

const coordenadas = [];
for(let i = 1; i < linhas.length; i++) {
    const coord = linhas[i].split(" ");
    coordenadas.push({
        x: parseInt(coord[0], 10),
        y: parseInt(coord[1], 10)
    });
};

console.log(coordenadas)
