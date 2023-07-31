// Conceito de Callbacks com setTimeout, leva o tempo informado para retornar a função colocada

// essas são funções sem callback

function imprimeNome (nome) {
    console.log(nome);
}

imprimeNome("Aline Lombardi");

const imprimeNomeDois = (nome) => {
    console.log(nome);
}
imprimeNomeDois("Aline Lombardi 2")

// Call back

const imprimir = () => {
    console.log("Aline Lombardi 3")
}

setTimeout(imprimir, 2000); // função com callback, é uma função que chama outra função, no caso a impprimir. 

//pode ser criado uma função dentro da outra também

setTimeout(() => {
    console.log("Aline Lombardi 4")
}, 3000);

// ou ainda

setTimeout(function () {
    console.log("Aline Lombardi 5")
}, 4000)