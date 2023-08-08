const express = require('express');
const app = express();

app.listen(3333);

app.get('/', (request, response) => {
    const array = [ 
        { id: 11, nome: 'João', idade: 23 }, 
        { id: 2, nome: 'Ana', idade: 33 }, 
        { id: 4, nome: 'Maria', idade: 55 }, 
        { id: 1, nome: 'Rodrigo', idade: 17 }
    ];
    response.send(array);
})