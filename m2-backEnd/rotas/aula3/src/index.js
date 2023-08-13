const express = require('express'); // Importando o Express
const { mostraLista, buscaProfessor, filtraProfessor } = require('./controladores/professores')
const app = express(); // Instância do Express


//intermediários independentes
const primeiroInter = (request, response, next) => { //método que informa que vamos utilizar o intermediário e os parâmetros que recebe
    console.log('passei no primeiro intermediário');
    next();
};

const segundoInter = (request, response, next) => { //método que informa que vamos utilizar o intermediário e os parâmetros que recebe
    console.log('passei no segundo intermediário');
    next();
};

// Intermediários de rota
const interRota = (request, response, next) => { //método que informa que vamos utilizar o intermediário e os parâmetros que recebe
    console.log('passei no intermediário da rota');
    next();
};

app.use(primeiroInter);
app.use(segundoInter);


// Rota localhost:3000/
app.get('/', (request, response) => { // Criando uma rota
    response.send('Servidor rodando');
});

//Rota localhost:3000/professores
app.get('/professores', mostraLista);

// Rota localhost:3000/professores
app.get('/professores/:id', interRota, buscaProfessor); // usando intermediário de rota

// Rota localhost:3000/busca
app.get('/busca', filtraProfessor );

app.listen(3000); // Informando a porta do servidor.
