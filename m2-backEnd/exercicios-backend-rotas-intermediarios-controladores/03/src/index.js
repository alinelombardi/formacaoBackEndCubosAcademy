const express = require('express');
const roteador = require("./roteador");
const app = express();


app.listen(8000);

app.use(roteador);