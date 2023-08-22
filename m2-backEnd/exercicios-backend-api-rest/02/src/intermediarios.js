const validaSenha =  (request, response, next) => {
    const { senha } = request.query;

    if(senha !== 'cubos123') {
        return response.status(401).json({mensagem: 'Senha está incorreta'});
    };
    next();
}

module.exports = validaSenha;