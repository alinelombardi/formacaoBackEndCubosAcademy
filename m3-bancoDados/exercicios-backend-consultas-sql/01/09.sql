-- 9 - Selecione as 10 composições, com todos os campos da tabela `musicas`, nas quais sejam as 10 composições que mais demora em tempo de execução.

SELECT * FROM musicas ORDER BY tempo DESC LIMIT 10;