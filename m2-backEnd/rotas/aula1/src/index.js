const express = require('express'); // Importando o Express
const app = express(); // Instância do Express

const professores = [
    { id: 1, nome: 'Guido', stack: 'Backend' },
    { id: 2, nome: 'Dani', stack: 'Frontend' },
    { id: 3, nome: 'Diego', stack: 'Frontend' },
    { id: 4, nome: 'Vidal', stack: 'Backend' }
];

// Rota localhost:3000/
app.get('/', (request, response) => { // Criando uma rota
    response.send('Servidor rodando');
});

//Rota localhost:3000/professores
app.get('/professores', (request, response) => { // Criando uma rota que retorna informações do array
    response.send(professores);
});

// Rota localhost:3000/professores
app.get('/professores/:id', (request, response) => { // Criando uma rota com parâmetro
    const encontrado = professores.find((professor) => { //localizando a informação desejada
        return professor.id === Number(request.params.id); // Convertendo o valor da requisição para número e, através do "params", localizando o ID informado na requisição.
    });
    
    response.send(encontrado);
});

// Rota localhost:3000/busca
app.get('/busca', (request, response) => { // Criando uma rota que retorna informações do array ou filtro
    
    const { stack } = request.query; // desestruturando o objeto
    let busca = professores;

    if(stack) {
        busca = professores.filter((professor) => { //filtrando a informação desejada
            return professor.stack === stack;
        });
    }
    
    response.send(busca);
});

app.listen(3000); // Informando a porta do servidor.
