-- 5 - Selecione as composições e o tempo de cada composição, de todos os registros da tabela `musicas`, onde o compositor seja `Mozart` ou `Bach`.


SELECT composicao, tempo FROM musicas where compositor = 'Bach' OR compositor = 'Mozart'