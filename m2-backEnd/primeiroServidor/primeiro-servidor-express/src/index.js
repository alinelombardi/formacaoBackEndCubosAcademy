const express = require('express'); //importei o express

const app = express(); // instanciei o express

app.get('/', (requisicao, resposta) => { // get é um metodo que cria uma rota a barra tem relação com a url. Exemplo: http://localhost:3000/
    resposta.send('Olá, esse é o meu primeiro servidor com o express')
});

app.listen(3000); // direciona para a porta 3000