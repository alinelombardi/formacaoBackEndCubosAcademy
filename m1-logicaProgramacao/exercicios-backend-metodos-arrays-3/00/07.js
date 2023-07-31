const carros = [
    { nome: "corola", marca: "toyota", ano: "2020", cor: "prata" },
    { nome: "argo", marca: "fiat", ano: "2021", cor: "preto" },
    { nome: "ranger", marca: "ford", ano: "2021", cor: "prata" },
    { nome: "hilux", marca: "toyota", ano: "2018", cor: "branco" },
];

const campo = "cor"

const ordenaCarros = (carros, campo) => {
    carros.sort((a, b) => {
        return a[campo].localeCompare(b[campo])
    })
    console.log(carros);
}

ordenaCarros(carros, campo)

    


