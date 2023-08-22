const alunos = require('../dados/alunos');

let idProximoAlunoCriado = 1;

const obterAlunos = (request, response) => {
    return response.json(alunos);
};

const obterAlunoPeloId = (request, response) => {
    const idRequisitado = Number(request.params.id);

    if (isNaN(idRequisitado)) {
        return response.status(400).json({ mensagem: "O id informado não é um número válido." });
    };

    const aluno = alunos.find(aluno => aluno.id === idRequisitado);

    if (!aluno) {
        return response.status(404).json({ mensagem: "Aluno não encontrado." })
    };

    return response.json(aluno);
}

const adicionarAluno = (request, response) => {
    const { nome, sobrenome, idade, curso } = request.body;

    if (!nome) {
        return response.status(400).json({ mensagem: "O nome deve ser informado." });
    };

    if (!sobrenome) {
        return response.status(400).json({ mensagem: "O sobrenome deve ser informado." });
    };

    if (!idade) {
        return response.status(400).json({ mensagem: "A idade deve ser informada." });
    };

    if (!curso) {
        return response.status(400).json({ mensagem: "O curso deve ser informado." });
    };

    if (idade < 18) {
        return response.status(400).json({ mensagem: "O aluno a ser adicionado deve ter pelo menos 18 anos." });
    };

    const novoAluno = {
        id: idProximoAlunoCriado,
        nome,
        sobrenome,
        idade,
        curso
    };

    idProximoAlunoCriado++;

    alunos.push(novoAluno);

    return response.status(201).send();
}

const excluirAluno = (request, response) => {
    const idAlunoExclusao = Number(request.params.id);

    if (isNaN(idAlunoExclusao)) {
        return response.status(400).json({ mensagem: "O id informado não é um número válido." });
    };

    const indiceAlunoExclusao = alunos.findIndex(aluno => aluno.id === idAlunoExclusao);

    if (indiceAlunoExclusao < 0) {
        return response.status(404).json({ mensagem: "Aluno a ser excluído não encontrado." })
    };

    const alunoExcluido = alunos.splice(indiceAlunoExclusao, 1)[0];

    return response.json(alunoExcluido);
};

module.exports = {
    obterAlunos,
    obterAlunoPeloId,
    adicionarAluno,
    excluirAluno
};