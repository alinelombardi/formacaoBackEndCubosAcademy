const livros = ['Guerra e Paz', 'A Montanha Mágica', 'Cem Anos de Solidão', 'Dom Quixote', 'A Divina Comédia'];

const nomeDoLivro = "Dom Quixote";

const localizaLivros = (livros, nomeLivro) => {
    const posicao = livros.findIndex((nome) => {
        return nome === nomeLivro;
    })
    if(posicao !== -1) {
        console.log(`O livro está na posição ${posicao + 1}`);
    } else {
        console.log(`Não localizei o livro informado`);
    }
}

localizaLivros(livros, nomeDoLivro);
