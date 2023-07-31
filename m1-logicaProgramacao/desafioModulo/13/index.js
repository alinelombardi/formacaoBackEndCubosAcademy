function processData(input) {
  const linhas = input.trim().split("\n");
  const coordenadas = [];

  for (let i = 1; i < linhas.length; i++) {
    const x = parseFloat(linhas[i]);
    const y = parseFloat(linhas[i+1]);
    coordenadas.push([x, y]);
  }

  function calcularDistancia(coordenadas) {
    let maior = 0;
    for (let i = 0; i < coordenadas.length; i++) {
      for (let j = i + 1; j < coordenadas.length; j++) {
        const [x1, y1] = coordenadas[i];
        const [x2, y2] = coordenadas[j];
        const distancia = Math.sqrt((x2 - x1) ** 2 + (y2 - y1) ** 2);

        if (distancia > maior) {
          maior = distancia;
        }
      }
    }
    return maior;    
  }

  const resultado = calcularDistancia(coordenadas);
  console.log(resultado);
}

const input = "3.56\n17\n-5.1\n36.3\n0.0002\n-2\n5\n5\n-9.01\n-17.7";
processData(input);

