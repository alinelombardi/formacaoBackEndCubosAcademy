-- 12 - Seguindo o conceito de paginação de resultados, sabendo que cada página retorna apenas 12 resultados, faça a listagem dos registros que correspondam a página 6.


SELECT * FROM musicas LIMIT 12 OFFSET 12*5;