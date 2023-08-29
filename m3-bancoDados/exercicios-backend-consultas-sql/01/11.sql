-- 11 - Seguindo o conceito de paginação de resultados, sabendo que cada página retorna apenas 10 resultados, faça a listagem dos registros que correspondam a página 4.

SELECT * FROM musicas LIMIT 10 OFFSET 0;
SELECT * FROM musicas LIMIT 10 OFFSET 10;
SELECT * FROM musicas LIMIT 10 OFFSET 20;
SELECT * FROM musicas LIMIT 10 OFFSET 30;