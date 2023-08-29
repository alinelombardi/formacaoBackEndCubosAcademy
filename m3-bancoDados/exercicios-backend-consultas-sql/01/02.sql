-- 2 - Selecione as composições e o tempo de cada composição, de todos os registros da tabela `musicas`, onde o tempo seja maior que 4 minutos.

SELECT composicao, tempo FROM musicas where tempo > 60*4;