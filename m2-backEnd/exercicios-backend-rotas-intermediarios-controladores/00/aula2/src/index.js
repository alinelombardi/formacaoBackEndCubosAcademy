const express = require('express'); // Importando o Express
const { mostraLista, buscaProfessor, filtraProfessor } = require('./controladores/professores')
const app = express(); // Instância do Express


// Rota localhost:3000/
app.get('/', (request, response) => { // Criando uma rota
    response.send('Servidor rodando');
});

//Rota localhost:3000/professores
app.get('/professores', mostraLista);

// Rota localhost:3000/professores
app.get('/professores/:id', buscaProfessor);

// Rota localhost:3000/busca
app.get('/busca', filtraProfessor );

app.listen(3000); // Informando a porta do servidor.
