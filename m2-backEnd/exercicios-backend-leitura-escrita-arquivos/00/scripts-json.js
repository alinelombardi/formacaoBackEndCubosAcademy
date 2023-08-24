const fs = require('fs/promises');

(async function () {
    const arquivoJson = await fs.readFile('teste.json');

    const pessoas = JSON.parse(arquivoJson); //JSON.parse transforma em json o retorno da função

    pessoas.push({
        nome: 'Yuri',
        idade: 15
    });

    const arrayJson = JSON.stringify(pessoas); //JSON.stringify transforma em json o código javascript

    console.log(arrayJson);
})();


