const express = require('express');
const app = express();
const { mostraNome, remover, adicionar } = require('./controladores/jogadores');
const verificaNome = require('./intermediarios');

app.use(verificaNome);

app.get('/', mostraNome);
app.get('/remover', remover);
app.get('/adicionar', verificaNome, adicionar);
app.listen(8000);