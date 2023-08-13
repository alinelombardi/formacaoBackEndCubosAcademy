const express = require('express');
const app = express();
const { soma, subtrai, multiplica, dividi } = require('./controladores/calculadora');

app.get('/somar', soma);
app.get('/subtrair', subtrai);
app.get('/multiplicar', multiplica);
app.get('/dividir', dividi);

app.listen(3000);