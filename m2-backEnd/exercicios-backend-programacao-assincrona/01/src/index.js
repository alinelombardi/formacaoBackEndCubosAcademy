const express = require('express');
const app = express();

const  { getCityFromZipcode, getPackageDescriptionNpm } = require('utils-playground')


app.get('/', async (request, response) => {
    const cidade = getCityFromZipcode('13185185');
    const cidade2 = getCityFromZipcode('13181796');

    console.log(cidade, cidade2)
    response.send(`A cidade encontrada foi: ${cidade}`);
});

app.get('/', async (request, response) => {
    const cidade = getCityFromZipcode('13185185');
    const cidade2 = getCityFromZipcode('13181796');

    const promisse = await Promise.all([cidade, cidade2]); // método para que agrupar todas as promessas, porem ele também retorna uma promessa, por isso usamos await, ele irá exibir o retorno na mesma ordem que é passado. Para utilizar uma promessa não pode depender da outra

    const [resposta, resposta2] = promisse;

    console.log(promisse);
    response.send(`A cidade encontrada foi: ${resposta} e ${resposta2}`);
});

//Exercício resolvido

app.get('/pacote/:nomePacote', async (request, response) => {
    const { nomePacote } = request.params;
    const retorno = await getPackageDescriptionNpm(nomePacote);

    console.log(retorno);
    response.send(`O retorno é: ${retorno}`);
});

app.listen(3000);