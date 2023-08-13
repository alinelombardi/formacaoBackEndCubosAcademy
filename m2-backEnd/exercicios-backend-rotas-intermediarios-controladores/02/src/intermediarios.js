const verificaNome = (request, response, next) => {
    const { nome } = request.query;
    if(!nome) {
        return response.send('O nome é de preenchimento obrigatório');
    } else {
        next();
    }
}

module.exports = verificaNome