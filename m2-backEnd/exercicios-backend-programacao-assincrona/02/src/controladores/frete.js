const produtos = require('../bancodedados/produtos');
const { getStateFromZipcode } = require('utils-playground')

const listarProdutos = (request, response) => {
    return response.status(200).json(produtos);
};

const listarProduto = (request, response) => {
    const { idProduto } = request.params;

    if(!idProduto) {
        return response.status(400).json(`Id do produto deve ser informado`)
    }

    const produto = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    });

    if (!produto) {
        return response.status(404).json('Produto não localizado')
    }

    return response.status(200).json(produto);
};

const mostrarFrete = async (request, response) => {
    const { idProduto, cep } = request.params;
    let porcentagemFrete = 0;

    if(!idProduto || !cep) {
        return response.status(400).json(`Id do produto e CEP devem ser informados`)
    }

    const produto = produtos.find((produto) => {
        return produto.id === Number(idProduto);
    })

    if (!produto) {
        return response.status(404).json('Produto não localizado')
    }

    const estado = await getStateFromZipcode(cep);

    if(estado === 'BA' || estado === 'SE' || estado === 'AL', estado === 'PE' || estado === 'PB') {
        porcentagemFrete = 10;
    } else if (estado === 'SP' || estado === 'RJ') {
        porcentagemFrete = 15;
    } else {
        porcentagemFrete = 12;
    }

    const produtoFrete = {
        produto: {
            id: idProduto,
            nome: produto.nome,
            valor: produto.valor
        },
        estado: estado,
        frete: (produto.valor * porcentagemFrete)/100
    }

    return response.status(200).json(produtoFrete);
};

module.exports = { listarProdutos, listarProduto, mostrarFrete }