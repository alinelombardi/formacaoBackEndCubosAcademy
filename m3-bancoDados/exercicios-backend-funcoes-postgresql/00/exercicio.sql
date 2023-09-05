select categoria, count(id) as "quantidadeProdutos", 
sum(estoque) as "somaTotalEstoque" from farmacia group by categoria;