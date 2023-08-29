-- 4 - Selecione todos os registros com todos os campos da tabela `musicas`, onde o compositor não seja nulo, o tempo seja menor que 5 minutos e o nome do compositor seja diferente de `Bach`.

SELECT * FROM musicas where compositor is not null and tempo < 60*5 and compositor <> 'Bach';