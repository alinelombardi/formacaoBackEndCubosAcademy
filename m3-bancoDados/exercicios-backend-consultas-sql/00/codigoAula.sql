-- Exibe todos os registros e colunas da tabela músicas
SELECT * FROM musicas;

-- Exibe as colunas id, ritmo e compositor
SELECT id, ritmo, compositor FROM musicas;

-- Exibe os compositores/composição sem repetição
SELECT DISTINCT compositor, composicao FROM musicas;

-- Exibe registros onde o tempo é maior que 200 -  where (onde)
SELECT * FROM musicas WHERE tempo > 200;

-- Exibe registros onde o tempo é maior que 200 e menor que 400
SELECT * FROM musicas WHERE tempo > 200 AND tempo < 400;

-- Exibe registros onde o tempo é maior que 200 e menor que 400 - o BETWEEN substitui o sinal de > neste caso
SELECT * FROM musicas WHERE tempo BETWEEN 200 AND 400;

-- Exibe registros onde o compositor é Schubert ou Bach
SELECT * FROM musicas WHERE compositor = 'Schubert' OR compositor = 'Bach';

-- Exibe registros onde o compositor está vazio
SELECT * FROM musicas WHERE compositor IS NULL;

-- Exibe registros onde o compositor não está vazio
SELECT * FROM musicas WHERE compositor IS NOT NULL;

-- Exibe 3 registros e colunas da tabela músicas
SELECT * FROM musicas LIMIT 3;

-- Exibe os registros (eliminando os 4 primeiros) e colunas da tabela músicas
SELECT * FROM musicas OFFSET 4;

-- Exibe 10 registros (eliminando o índice 0)
SELECT * FROM musicas LIMIT 10 OFFSET 0; --página 1

-- Exibe 10 registros (eliminando o índice até 10)
SELECT * FROM musicas LIMIT 10 OFFSET 10; --página 2

-- Exibe 10 registros (eliminando o índice até 200)
SELECT * FROM musicas LIMIT 10 OFFSET 20; --página 3

-- Exibe os registros onde o compositor é Schubert e ordenada de forma crescente
SELECT * FROM musicas WHERE compositor = 'Schubert' ORDER BY id ASC;

-- Exibe os registros onde o compositor é Schubert e ordenada de forma decrescente
SELECT * FROM musicas WHERE compositor = 'Schubert' ORDER BY id DESC;

-- Exibe os registros onde o compositor fica em ordem crescente
SELECT * FROM musicas ORDER BY compositor ASC;

-- Exibe os registros onde o compositor fica em ordem decrescente
SELECT * FROM musicas ORDER BY compositor DESC;

-- Exibe os registros onde o compositor fica em ordem crescente e composição decrescente
SELECT * FROM musicas ORDER BY compositor ASC, composicao DESC;

-- Exibe os registros onde o ritmo fica em ordem crescente
SELECT * FROM musicas ORDER BY ritmo ASC;

-- Exibe os registros onde composição é igual a Violin Sonata No 1 in G minor
SELECT * FROM musicas WHERE composicao LIKE 'Violin Sonata No 1 in G minor';

-- Exibe os registros onde composição tem vários caracteres antes da frase, palavra desejada
SELECT * FROM musicas WHERE composicao LIKE '%in G minor';

-- Exibe os registros onde composição tem vários caracteres depois da frase, palavra desejada
SELECT * FROM musicas WHERE composicao LIKE 'Violin Sonata%';

-- Exibe os registros onde composição tem vários caracteres antes e depois da frase, palavra desejada
SELECT * FROM musicas WHERE composicao LIKE '%Sonata%';

-- Exibe os registros onde composição tem caracteres 3 antes e 2 depois da palavra desejada
SELECT * FROM musicas WHERE composicao LIKE '___no Sonata in A maj__';

-- Exibe os registros onde composição tem caracteres 3 antes da palavra desejada
SELECT * FROM musicas WHERE composicao LIKE '___no Sonata%';

-- Exibe os registros onde composição tem vários caracteres antes da palavra desejada e um depois, com case sensitive (ou seja, tem que respeitar maiúsculas e minusculas)
SELECT * FROM musicas WHERE composicao ILIKE '%sonata in a majo_';