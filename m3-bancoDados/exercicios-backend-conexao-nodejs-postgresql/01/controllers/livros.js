const pool = require('../conexao');

const cadastrarLivro = async (request, response) => {
	const { id } = request.params;
	const { nome, genero, editora, data_publicacao } = request.body;

	if (!nome) {
		return response.status(400).json({ mensagem: 'O campo nome é obrigatório' });
	};

	try {
		const { rowCount, rows } = await pool.query('select * from autores where id = $1', [id]);

		if (rowCount === 0) {
			return response.status(404).json({ mensagem: 'O autor não existe' });
		};

		const autor = rows[0];

		const query = `
            insert into livros (autor_id, nome, genero, editora, data_publicacao)
            values ($1, $2, $3, $4, $5) returning *
        `;
		const livro = await pool.query(query, [
			autor.id,
			nome,
			genero,
			editora,
			data_publicacao,
		]);

		return response.status(201).json(livro.rows[0]);

	} catch (error) {

		return response.status(500).json({ mensagem: 'Erro interno do servidor' });
	}
};

const visualizarLivros = async (request, response) => {
	try {
		const query = `
            select l.id, l.nome, l.genero, l.editora, l.data_publicacao,
            l.autor_id, a.nome as autor_nome, a.idade as autor_idade 
            from livros l left join autores a 
            on l.autor_id = a.id
        `;

		const { rows } = await pool.query(query);

		const livros = rows.map(livro => {
			const { autor_id, autor_nome, autor_idade, ...dadosLivro } = livro;
			return {
				...dadosLivro,
				autor: {
					id: autor_id,
					nome: autor_nome,
					idade: autor_idade,
				},
			}
		});

		return response.json(livros);

	} catch (error) {

		return response.status(500).json({ mensagem: 'Erro interno do servidor' });
	}
};

module.exports = { cadastrarLivro, visualizarLivros };