const verificarPreenchimento = (request, response, next) => {
    const campos = request.body;
    let camposVazio = [];

    for (let item of Object.keys(campos)) {
        if (campos[item] === '') {
            camposVazio.push(item);
        };
    };

    if (camposVazio.length === 1) {
        return response.status(400).json(`O campo ${camposVazio} é de preenchimento obrigatório`);
    };

    if (camposVazio.length > 1) {
        return response.status(400).json(`Os campos ${camposVazio.join(', ')} são de preenchimento obrigatório`);
    };
    
    next();
};

module.exports = verificarPreenchimento;