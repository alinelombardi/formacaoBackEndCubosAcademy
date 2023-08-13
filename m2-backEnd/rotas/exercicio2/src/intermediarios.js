const validaSenha = (request, response, next) => {
    const senhaSistema = 'carros123';
    const { senha } = request.query;

    if(!senha) {
        return response.send('A senha não foi informada');
    };

    if(senha !== senhaSistema) {
        return response.send('Usuário inválido');
    };

    next();
}

module.exports = validaSenha;