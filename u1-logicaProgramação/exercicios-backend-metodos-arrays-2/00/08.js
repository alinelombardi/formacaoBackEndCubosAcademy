
const carros = [
    { nome: '207 passion', marca: 'Peugeot', ano: '2010', cor: 'cinza' },
    { nome: 'Celta', marca: 'Ford', ano: '2004', cor: 'preto' },
    { nome: 'corola', marca: 'toyota', ano: '2030', cor: 'branco' },
    { nome: 'ranger', marca: 'fiat', ano: '2018', cor: 'prata' }
];

const marca = 'Ford'


const buscarCarro = (marca, array) => {
    return array.find((carro) => {
        return carro.marca === marca;
    });
}

const resultado = buscarCarro(marca, carros);
console.log(resultado);