const validarSenha = (request, response, next) => {
    const { senha_banco } = request.query;

    if (!senha_banco) {
        return response.status(400).json({ mensagem: 'Gentileza informar a senha de acesso' });
    };

    if (senha_banco !== 'Cubos123Bank') {
        return response.status(401).json({ mensagem: 'A senha do banco informada é inválida!' });
    };
    
    next();
};

module.exports = validarSenha;