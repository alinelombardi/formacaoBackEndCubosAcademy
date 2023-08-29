-- 13 - Selecione todos os compositores da tabela `musicas` de forma que os resultados não sejam repetidos e não esteja nulo.

SELECT DISTINCT compositor FROM musicas WHERE compositor IS NOT NULL;