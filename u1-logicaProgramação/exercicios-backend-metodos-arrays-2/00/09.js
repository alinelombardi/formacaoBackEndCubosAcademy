//findIndex()

const alunos = ['Laila', 'Yuri', 'Aline'];

const resposta = alunos.findIndex((aluno) => {
    return aluno === 'Laila';
})

console.log(resposta);


const carros = [
    { nome: '207 passion', marca: 'Peugeot', ano: '2010', cor: 'cinza' },
    { nome: 'Celta', marca: 'Ford', ano: '2004', cor: 'preto' },
    { nome: 'corola', marca: 'toyota', ano: '2030', cor: 'branco' },
    { nome: 'ranger', marca: 'fiat', ano: '2018', cor: 'prata' }
];

const retornoCarros = carros.findIndex((carro) => {
    return carro.nome === 'ranger';
})

console.log(retornoCarros);