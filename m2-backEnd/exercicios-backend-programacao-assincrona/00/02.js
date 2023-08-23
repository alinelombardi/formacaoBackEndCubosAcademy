const { getCityFromZipcode, getStateFromZipcode } = require('utils-playground');

//função anonima para ser executada de imediato

(function() {
    getCityFromZipcode('13185185').then((cidade) => {
        console.log(cidade);
    }).catch((erro) => {
        console.log(erro)
    })

    getStateFromZipcode('13185185').then((estado) => {
        console.log(estado)
    }).catch((erro) => {
        console.log(erro)
    })

})();

//async / await

(async function() {
    const cidade = await getCityFromZipcode('13185185');
    console.log(cidade)
    const estado = await getStateFromZipcode('13185185');
    console.log(estado)

})();

const testes = async () => {

}

async function teste2() {
    
}