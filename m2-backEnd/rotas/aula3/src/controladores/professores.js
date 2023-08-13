//Arquivo criado para armazenar todos os controladores. 

const professores = require('../bancoDados');

const mostraLista = (request, response) => { // Criando uma rota que retorna informações do array
    response.send(professores);
};

const buscaProfessor = (request, response) => { // Criando uma rota com parâmetro
    const encontrado = professores.find((professor) => { //localizando a informação desejada
        return professor.id === Number(request.params.id); // Convertendo o valor da requisição para número e, através do "params", localizando o ID informado na requisição.
    });
    
    response.send(encontrado);
};

const filtraProfessor = (request, response) => { // Criando uma rota que retorna informações do array ou filtro
    
    const { stack } = request.query; // desestruturando o objeto
    let busca = professores;

    console.log('Cheguei no controlador')

    if(stack) {
        busca = professores.filter((professor) => { //filtrando a informação desejada
            return professor.stack === stack;
        });
    }
    
    response.send(busca);
};

module.exports = {
    mostraLista,
    buscaProfessor,
    filtraProfessor
};