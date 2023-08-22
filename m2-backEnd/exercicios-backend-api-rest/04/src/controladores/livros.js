const livros = require('../dados/livros');
let proximoId = 3;

const listarLivros = (request, response) => {
    return response.status(200).json(livros);
};

const consultarLivro = (request, response) => {
    const livroId = Number(request.params.id);

    if (isNaN(livroId)) {
        return response.status(400).json({ mensagem: "O valor do parâmetro ID da URL não é um número válido." });
    }

    const livro = livros.find(livro => livro.id === livroId);

    if (!livro) {
        return response.status(404).json({ mensagem: "Não existe livro para o ID informado." });
    };

    return response.json(livro);
};

const cadastrarLivro = (request, response) => {
    const { titulo, autor, ano, numPaginas } = request.body;

    if (!titulo) {
        return response.status(400).json({ mensagem: "O campo titulo é obrigatório" });
    };

    if (!autor) {
        return response.status(400).json({ mensagem: "O campo autor é obrigatório" });
    };

    if (!ano) {
        return response.status(400).json({ mensagem: "O campo ano é obrigatório" });
    };

    if (!numPaginas) {
        return response.status(400).json({ mensagem: "O campo numPaginas é obrigatório" });
    };

    const livro = {
        id: proximoId++,
        titulo,
        autor,
        ano,
        numPaginas
    };

    livros.push(livro);  
    return response.status(201).json(livro);
};

const alterarLivro = (request, response) => {
    const { titulo, autor, ano, numPaginas } = request.body;

    if (!titulo) {
        return response.status(400).json({ mensagem: "O campo titulo é obrigatório" });
    };

    if (!autor) {
        return response.status(400).json({ mensagem: "O campo autor é obrigatório" });
    };

    if (!ano) {
        return response.status(400).json({ mensagem: "O campo ano é obrigatório" });
    };

    if (!numPaginas) {
        return response.status(400).json({ mensagem: "O campo numPaginas é obrigatório" });
    };

    const livroExistente = livros.find(livro => livro.id === Number(request.params.id));

    if (!livroExistente) {
        return response.status(404).json({ mensagem: "Não existe livro a ser substituído para o ID informado." });
    };

    livroExistente.titulo = titulo;
    livroExistente.autor = autor;
    livroExistente.ano = ano;
    livroExistente.numPaginas = numPaginas;

    return response.json({ mensagem: "Livro substituído." });
};

const alterarParcialLivro = (request, response) => {
    const { titulo, autor, ano, numPaginas } = request.body;

    const livroExistente = livros.find(livro => livro.id === Number(request.params.id));

    if (!livroExistente) {
        response.status(404).json({ mensagem: "Não existe livro a ser alterado para o ID informado." });
    };

    if (titulo) {
        livroExistente.titulo = titulo;
    };

    if (autor) {
        livroExistente.autor = autor;
    };

    if (ano) {
        livroExistente.ano = ano;
    };

    if (numPaginas) {
        livroExistente.numPaginas = numPaginas;
    };

    return response.json({ mensagem: "Livro alterado." });
};

const excluirLivro = (request, response) => {
    const indiceLivro = livros.findIndex(livro => livro.id === Number(request.params.id));

    if (indiceLivro < 0) {
        return response.status(404).json({ mensagem: "Não existe livro a ser removido para o ID informado." });
    };

    livros.splice(indiceLivro, 1);

    return response.json({ mensagem: "Livro removido." });
};

module.exports = { listarLivros, consultarLivro, cadastrarLivro, alterarParcialLivro, excluirLivro, alterarLivro };