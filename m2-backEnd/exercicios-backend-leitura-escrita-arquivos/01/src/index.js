const express = require('express');
const fs = require('fs/promises');

const app = express();

app.use(express.json());

app.get('/', async (request, response) => {

    await fs.writeFile('./src/b.txt', 'Oieoieoie');
    response.json('ok!');
});


app.post('/', async (request, response) => {

    const { nome, idade } = request.body;

    try {
        const testes = await fs.readFile('./src/usuarios.json');

        const pessoas = JSON.parse(testes);
        pessoas.push({ nome, idade });
    
        const pessoa = JSON.stringify(pessoas);
        await fs.writeFile('./src/usuarios.json', pessoa)
    
        return response.json('Pessoa cadastrada')
    } catch (error) {
        return response.json(`Deu erro: ${error.message}`)
    } finally {
        console.log('Isso sempre será executado')
    }
});


app.listen(3000);