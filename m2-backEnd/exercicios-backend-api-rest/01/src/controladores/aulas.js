let { instrutores, aulas, identificadorAula } = require('../bancoDados');

const cadastrarAula = (request, response) => {
    const { idInstrutor } = request.params;
    const { descricao, titulo } = request.body;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor)
    });

    if(!instrutor) {
        return response.status(404).json({message: 'Instrutor não foi localizado'});
    };

    const aula = {
        id: identificadorAula++,
        instrutor_id: Number(idInstrutor),
        titulo,
        descricao
    };

    aulas.push(aula);

    return response.status(201).json({message: aulas});
}

const listarAulas = (request, response) => {
    return response.status(200).json(aulas);
};

const listarAula = (request, response) => {
    const { id } = request.params;

    const aula = aulas.find((item) => {
        return item.id === Number(id);
    })
    
    if(!aula) {
        return response.status(404).json({message: 'Aula não foi localizada'});
    }

    return response.status(200).json(aula);
};

const verAulaInstrutores = (request, response) => {
    const { idInstrutor } = request.params;

    const instrutor = instrutores.find((instrutor) => {
        return instrutor.id === Number(idInstrutor);
    });

    if (!instrutor) {
        return response.status(404).json({ mensagem: 'O instrutor não existe' });
    }

    const aulasEncontradas = aulas.filter((aula) => {
        return aula.instrutor_id === instrutor.id;
    });

    return response.status(200).json(aulasEncontradas);}


module.exports = { cadastrarAula, listarAulas, listarAula, verAulaInstrutores };