const numeros = [1, 2, 3, 4, 5 ,6];

const resposta = numeros.filter((numero) => {
    return numero > 3;
})

console.log(resposta);


const carros = [
    { nome: '207 passion', marca: 'Peugeot', ano: '2010', cor: 'cinza' },
    { nome: 'Celta', marca: 'Ford', ano: '2004', cor: 'preto' },
    { nome: 'corola', marca: 'fiat', ano: '2030', cor: 'branco' },
    { nome: 'ranger', marca: 'fiat', ano: '2018', cor: 'prata' }
];

const retornaCarros = carros.filter((carro) => {
    return carro.marca === 'fiat';
})

console.log(retornaCarros);