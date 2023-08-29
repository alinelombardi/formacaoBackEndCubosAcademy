-- 10 - Selecione 10 registros, com todos os campos da tabela `musicas`, de forma que esses 10 registros sejam os que tenham menor tempo de execução com exceção dos 5 primeiro mais rápidos.

SELECT * FROM musicas ORDER BY tempo ASC LIMIT 10 OFFSET 5;