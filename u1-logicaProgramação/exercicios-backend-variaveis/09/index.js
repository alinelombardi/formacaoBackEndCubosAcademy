function somaAngulosInternos(n) {
    const soma =  (n-2) * 180;
    const angulo = soma / n
    return `o valor da soma dos ângulos internos é ${soma} e o valor de cada ângulo do polígono é ${angulo}`;
}

const n = 6;

const resultado = somaAngulosInternos(n)

console.log(resultado)
