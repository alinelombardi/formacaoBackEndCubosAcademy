const produtos = require('../dados/produtos');
const fs = require('fs/promises');

const listarProdutos = async (request, response) => {
    return response.status(200).json(produtos);
};

const registrarVendas = async (request, response) => {
    const { produto_id, quantidade } = request.body;

    const produto = produtos.find((item) => {
        return item.id === Number(produto_id);
    });

    if (!produto) {
        return response.status(404).json('ID não localizado');
    };

    try {
        const vendas = await fs.readFile('./src/dados/vendas.json');
        const retorno = JSON.parse(vendas);

        retorno.vendas.push({
            produto: produto,
            quantidade: quantidade
        })

        await fs.writeFile('./src/dados/vendas.json', JSON.stringify(retorno))

        return response.status(201).json('Venda cadastrada')

    } catch (error) {
        return response.status(500).json(`Erro do servidor: ${error.message}`)
    }
}
module.exports = { listarProdutos, registrarVendas }