const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');


// then método que tem uma função callback, que captura o retorno da promessa quando tem sucesso
getCityFromZipcode('13185185').then((cidade) => {
    console.log(cidade)
}).catch((erro) => {
    console.log(erro)
})
// cath captura o erro da promessa

// outra forma de escrita

const cidade = getCityFromZipcode('13181796');

cidade.then(cidade => {
    console.log(cidade)
})

cidade.catch((erro) => {
    console.log(erro)
})


getStateFromZipcode('13185185').then((estado) => {
    console.log(estado)
}).catch((erro) => {
    console.log(erro)
})


// como as funções assíncronas não tem ordem para retornar, desta forma você garante que uma promessa será chamada, apenas quando a outra finalizar, isso não é boa prática e pode trazer vários problemas
getCityFromZipcode('13185185').then((cidade) => {
    console.log(cidade);
    getStateFromZipcode('13185185').then((estado) => {
        console.log(estado)
    }).catch((erro) => {
        console.log(erro)
    })
}).catch((erro) => {
    console.log(erro)
})