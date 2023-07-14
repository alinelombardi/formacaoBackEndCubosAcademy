function perimetroArea(r) {
    const c = 2 * Math.PI * r;
    const a = Math.PI * Math.pow(r, 2)
    return `Para um círculo com R = ${r}, o valor de a é ${a} e c é ${c}`
}

const r = 1;

const resultado = perimetroArea(r)

console.log(resultado)
