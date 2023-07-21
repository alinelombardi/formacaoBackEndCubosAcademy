// Conceito de Callbacks com setInterval

// Repete durante o tempo determinado a função colocada dentro do setInterval
// para interromper o teste pressione ctrl + c

setInterval(() => {
    console.log("Olá")
}, 2000.)

//pode ser também

const imprimir = () => {
    console.log("Olá")
}

setInterval(imprimir, 2000);

//ou use outra função

const mostrar = () => {
    console.log("Olá");
    clearInterval(interval);
}

const interval = setInterval(mostrar, 2000);

let numero = 10;

const contador = setInterval(function () {
    console.log(numero);
    numero--;
    if(numero === 0) {
        console.log("Explodiu")
        clearInterval(contador)
    }
}, 1000)