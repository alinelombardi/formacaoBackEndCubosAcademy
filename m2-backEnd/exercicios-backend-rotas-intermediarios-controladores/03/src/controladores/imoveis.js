const imoveis = require('../dados/imoveis');

const get  = (request, response) => {
    return response.send(imoveis)
}

const getPorId = (request, response) => {
    const { id } = request.params

    const resposta = imoveis.find((imovel) => {
        return imovel.id === Number(id)
    })

    return response.send(resposta)
}

module.exports = { get, getPorId };