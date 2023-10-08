const express = require('express');
const { Client } = require('pg');

const app = express();

app.use(express.json());


app.get('/', async (request, response) => {
    const client = new Client({
        host: 'localhost',
        port: 5432,
        user: 'postgres',
        password: '220511',      
        database: 'aulaconexao'        
    });

    try {
        await client.connect();

        const resultado = await client.query('select * from empresas');

        await client.end();

        return response.json(resultado);

    } catch (error) {
        console.log(error.message);
    }

});

app.listen(3000);