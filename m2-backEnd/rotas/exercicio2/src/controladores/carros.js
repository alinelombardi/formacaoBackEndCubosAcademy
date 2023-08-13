const carros = require('../bancoDados');

const procuraCarro = (request, response) => {
    let achouCarros = carros;
    const { marca, cor } = request.query;

    if (marca) {
        achouCarros = achouCarros.filter((carro) => {
            return carro.marca === marca
        });
        if (achouCarros.length === 0) {
            achouCarros = 'Não localizei veículo desta marca';
        } else {
            achouCarros;
        }
    }

    if (cor) {
        achouCarros = achouCarros.filter((carro) => {
            return carro.cor === cor
        });
        if (achouCarros.length === 0) {
            achouCarros = 'Não localizei veículo desta cor';
        } else {
            achouCarros;
        }
    }
    response.send(achouCarros);

};

const listaGeral = (request, response) => {
    const encontrado = carros.find((carro) => {
        return carro.id === Number(request.params.id);
    });

    if(!encontrado) {
        response.send('Não encontrei o id informado');
    } else {
        response.send(encontrado);
    }    
};


module.exports = { listaGeral, procuraCarro }