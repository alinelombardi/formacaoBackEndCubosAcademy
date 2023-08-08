const express = require('express');

const app = express();

let rodando = false;
let minutos = 0;
let segundos = 0;

let setIntervalDisparado = false;

function iniciarCronometro() {
    rodando = true;

    if (!setIntervalDisparado) {
        setInterval(() => {
            if (rodando) {
                if (segundos == 59) {
                    segundos = 0;
                    minutos++;
                } else {
                    segundos++
                }
            }
        }, 1000);

        setIntervalDisparado = true;
    }
}

app.get("/", (request, response) => {
    return response.send(`Tempo atual do cronômetro: ${minutos.toString().padStart(2, "0")} minutos e ${segundos.toString().padStart(2, "0")} segundos`);
});

app.get("/iniciar", (request, response) => {
    iniciarCronometro();
    return response.send("Cronômetro iniciado!");
});

app.get("/pausar", (request, response) => {
    rodando = false;
    return response.send("Cronômetro pausado!");
});

app.get("/continuar", (request, response) => {
    rodando = true;
    return response.send("Cronômetro continuando!");
});

app.get("/zerar", (request, response) => {
    minutos = 0;
    segundos = 0;
    return response.send("Cronômetro zerado!");
});

app.listen(8000);