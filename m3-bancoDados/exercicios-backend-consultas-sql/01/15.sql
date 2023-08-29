-- 15 - Selecione todos os campos da tabela `musicas` e os registros que o nome do compositor comece exatamente com `Bra`, isso significa que se a primeira letra não form maiúscula está incorreto.


SELECT * FROM musicas WHERE compositor LIKE 'Bra%';